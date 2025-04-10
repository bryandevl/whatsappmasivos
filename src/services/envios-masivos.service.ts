// src/envios-masivos/envios-masivos.service.ts
import { Injectable, Logger, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EnvioMasivoCabecera } from '../entities/envio-masivo-cabecera.entity';
import { EnvioDetalle } from '../entities/envio-detalle.entity';
import { RespuestaMensaje } from '../entities/respuesta-mensaje.entity';
import { CreateEnvioMasivoDto } from '../dtos/create-envio-masivo.dto';
import { EnvioExcelRow } from '../dtos/envio-masivo-excel.dto';
import * as xlsx from 'xlsx';
import { SesionesService } from './sesiones.service'; // Asegúrate de que la ruta sea correcta       

@Injectable()
export class EnviosMasivosService {
  private readonly logger = new Logger(EnviosMasivosService.name);

  constructor(
    @InjectRepository(EnvioMasivoCabecera)
    private envioMasivoCabeceraRepository: Repository<EnvioMasivoCabecera>,
    @InjectRepository(EnvioDetalle)
    private envioDetalleRepository: Repository<EnvioDetalle>,
    @InjectRepository(RespuestaMensaje)
    private respuestaMensajeRepository: Repository<RespuestaMensaje>,
    private sesionesService: SesionesService,
  ) {
    // Configurar el manejador de mensajes entrantes
    this.configurarListenerMensajes();
  }

  // Configurar listener para mensajes entrantes en todas las sesiones
  private configurarListenerMensajes() {
    // Acceder al Map de clients en SesionesService
    const clientsMap = (this.sesionesService as any).clients;
    
    if (clientsMap && clientsMap instanceof Map) {
      // Para cada cliente existente, configurar el listener
      clientsMap.forEach((client, idSesion) => {
        this.configurarClientListener(client, idSesion);
      });
      
      // Y observar la creación de nuevos clientes
      const originalSet = clientsMap.set;
      clientsMap.set = (idSesion, client) => {
        this.configurarClientListener(client, idSesion);
        return originalSet.call(clientsMap, idSesion, client);
      };
    }
  }

  // Configurar un listener específico para un cliente
  private configurarClientListener(client: any, idSesion: number) {
    // Verificar si el cliente ya tiene nuestro listener
    const listeners = client.listenerCount('message');
    if (listeners === 0) {
      client.on('message', async (message) => {
        await this.procesarMensajeEntrante(idSesion, message);
      });
    }
  }

  // Procesar archivo Excel para envíos masivos
  async procesarEnvioMasivoExcel(
    file: Express.Multer.File,
    createEnvioMasivoDto: CreateEnvioMasivoDto,
  ): Promise<EnvioMasivoCabecera> {
    try {
     
      const sesion = await this.sesionesService.obtenerSesionPorId(createEnvioMasivoDto.id_sesion);
      if (!sesion) {
        throw new NotFoundException(`Sesión con ID ${createEnvioMasivoDto.id_sesion} no encontrada`);
      }
      
      if (sesion.estado !== 'activa') {
        throw new BadRequestException(`La sesión ${sesion.idSesion} no está activa. Estado actual: ${sesion.estado}`);
      }
  
    
      const clientsMap = (this.sesionesService as any).clients;
      const client = clientsMap.get(sesion.idSesion);
      
      if (!client) {
        throw new BadRequestException(`No hay un cliente WhatsApp activo para la sesión ${sesion.idSesion}`);
      }
  
     
      let data: { numero: string; mensaje: string }[];
      try {
        const workbook = xlsx.read(file.buffer, { type: 'buffer' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  
      
        const headers = Object.keys(worksheet)
          .filter(key => key.match(/[A-Z]1/))
          .map(key => ({ columna: key, valor: worksheet[key]?.v }));
        this.logger.debug(`Encabezados detectados: ${JSON.stringify(headers)}`);
  
        
        const rawData = xlsx.utils.sheet_to_json<Record<string, any>>(worksheet);
        data = rawData.map(row => {
          
          const numero = this.obtenerValorColumna(row, ['numero', 'número', 'number', 'celular', 'telefono']);
          
          const mensaje = this.obtenerValorColumna(row, ['mensaje', 'message', 'texto', 'contenido']);
          
          return {
            numero: numero ? this.formatearNumero(numero.toString().trim()) : null,
            mensaje: mensaje ? mensaje.toString().trim() : null
          };
        }).filter(row => row.numero && row.mensaje);
  
      
  
        this.logger.log(`Datos procesados: ${data.length} filas válidas`);
      } catch (error) {
        throw new BadRequestException(`Error al leer el archivo Excel: ${error.message}`);
      }
  
      // 4. Validación de datos
      if (!data || data.length === 0) {
        throw new BadRequestException(
          'El archivo no contiene datos válidos. Requiere columnas con: ' +
          'números (ej: "numero", "celular") y mensajes (ej: "mensaje", "texto")'
        );
      }
  
      
      const envioMasivo = new EnvioMasivoCabecera();
      envioMasivo.id_usuario = createEnvioMasivoDto.id_usuario;
      envioMasivo.celular_origen = createEnvioMasivoDto.celular_origen;
      envioMasivo.archivo_origen = file.originalname;
      envioMasivo.fecha_envio = new Date();
      envioMasivo.cantidad_mensajes = data.length;
      envioMasivo.estado_general = 'en_proceso';
  
      const envioMasivoGuardado = await this.envioMasivoCabeceraRepository.save(envioMasivo);
      
     
      let enviadosExitosos = 0;
      const errores: string[] = [];
  
      for (const [index, row] of data.entries()) {
        try {
          
          if (!row.numero || !row.mensaje) {
            this.logger.warn(`Fila ${index + 1} ignorada - Datos incompletos`);
            continue;
          }
  
         
          const envioDetalle = new EnvioDetalle();
          envioDetalle.id_envio_masivo = envioMasivoGuardado.id;
          envioDetalle.numero_destino = row.numero;
          envioDetalle.mensaje = row.mensaje;
          envioDetalle.fecha_envio = new Date();
          envioDetalle.estado = 'pendiente';
          
          const detalleGuardado = await this.envioDetalleRepository.save(envioDetalle);
          
        
          await client.sendMessage(`${row.numero}@c.us`, row.mensaje);
          
          
          detalleGuardado.estado = 'enviado';
          await this.envioDetalleRepository.save(detalleGuardado);
          enviadosExitosos++;
          
        } catch (error) {
          const errorMsg = `Fila ${index + 1} | Error: ${error.message}`;
          this.logger.error(errorMsg);
          errores.push(errorMsg);
        }
      }
  
    
      envioMasivoGuardado.estado_general = 'completado';
      envioMasivoGuardado.cantidad_mensajes = enviadosExitosos; 
      
      if (errores.length > 0) {
      
        this.logger.warn(`Envío completado con ${errores.length} errores`);
      }
  
      return this.envioMasivoCabeceraRepository.save(envioMasivoGuardado);
      
    } catch (error) {
      this.logger.error(`Error en procesarEnvioMasivoExcel: ${error.stack}`);
      throw new BadRequestException(
        error.response?.message || 
        error.message || 
        'Error al procesar el envío masivo'
      );
    }
  }
  

  private obtenerValorColumna(row: Record<string, any>, posiblesNombres: string[]): any {
    const key = Object.keys(row).find(k => 
      posiblesNombres.some(name => 
        k.toLowerCase() === name.toLowerCase()
      )
    );
    return key ? row[key] : null;
  }
  

  private formatearNumero(numero: string): string {
    let numeroLimpio = numero.replace(/[\s-]+/g, '');
    if (!numeroLimpio.startsWith('51') && !numeroLimpio.startsWith('+') && !numeroLimpio.startsWith('00')) {
      numeroLimpio = '51' + numeroLimpio;
    }
    return numeroLimpio.startsWith('+') ? numeroLimpio.substring(1) : numeroLimpio;
  }
  // Procesar mensajes entrantes (anti-spam)
  async procesarMensajeEntrante(idSesion: number, message: any): Promise<void> {
    try {
      const numeroOrigen = message.from.split('@')[0];
      
      // Verificar si el número está en nuestra base de datos de envíos
      const envioExistente = await this.envioDetalleRepository.findOne({
        where: { numero_destino: numeroOrigen }
      });
      
      // Si no existe en la base de datos, ignorar el mensaje (anti-spam)
      if (!envioExistente) {
        this.logger.warn(`[Sesión ${idSesion}] Mensaje ignorado de número no autorizado: ${numeroOrigen}`);
        return;
      }
      
      // Registrar la respuesta en la base de datos
      const respuesta = new RespuestaMensaje();
      respuesta.id_envio_detalle = envioExistente.id;
      respuesta.numero_origen = numeroOrigen;
      respuesta.mensaje_respuesta = message.body;
      respuesta.fecha_respuesta = new Date();
      
      await this.respuestaMensajeRepository.save(respuesta);
      this.logger.log(`[Sesión ${idSesion}] Respuesta registrada del número: ${numeroOrigen}`);
      
    } catch (error) {
      this.logger.error(`[Sesión ${idSesion}] Error al procesar mensaje entrante: ${error.message}`);
    }
  }

  // Obtener todos los envíos masivos
  async obtenerTodosEnviosMasivos(): Promise<EnvioMasivoCabecera[]> {
    return this.envioMasivoCabeceraRepository.find({
      relations: ['enviosDetalle'],
    });
  }

  // Obtener detalle de un envío masivo
  async obtenerEnvioMasivo(id: number): Promise<EnvioMasivoCabecera> {
    const envio = await this.envioMasivoCabeceraRepository.findOne({
      where: { id },
      relations: ['enviosDetalle'],
    });
    
    if (!envio) {
      throw new NotFoundException(`Envío masivo con ID ${id} no encontrado`);
    }
    
    return envio;
  }

  // Obtener respuestas de un número específico
  async obtenerRespuestas(numeroDestino: string): Promise<RespuestaMensaje[]> {
    // Buscar el envío detalle para ese número
    const envioDetalle = await this.envioDetalleRepository.findOne({
      where: { numero_destino: numeroDestino },
    });
    
    if (!envioDetalle) {
      throw new NotFoundException(`No se encontraron envíos para el número ${numeroDestino}`);
    }
    
    // Obtener las respuestas
    return this.respuestaMensajeRepository.find({
      where: { id_envio_detalle: envioDetalle.id },
      order: { fecha_respuesta: 'ASC' },
    });
  }
}