import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sesion } from '../entities/sesion.entity'; // Asegúrate de que la ruta sea correcta
import * as qrcode from 'qrcode-terminal';
import { Client, LocalAuth } from 'whatsapp-web.js';
import * as crypto from 'crypto';
import { EnvioMasivoCabecera    } from '../entities/envio-masivo-cabecera.entity';
import { EnvioDetalle } from '../entities/envio-detalle.entity';
import { RespuestaMensaje } from '../entities/respuesta-mensaje.entity';
import { CreateEnvioMasivoDto   } from '../dtos/create-envio-masivo.dto';
import { EnvioExcelRow  } from '../dtos/envio-masivo-excel.dto';
import * as xlsx from 'xlsx';

@Injectable()
export class SesionesService {
  private clients: Map<number, Client> = new Map();
  private qrCodes: Map<number, string> = new Map();

  constructor(
    @InjectRepository(Sesion)
    private sesionRepository: Repository<Sesion>,
  ) {}

  async crearSesion(nombreSesion: string, numeroTelefono: string): Promise<{ idSesion: number, qrToken: string, qrCode: string }> {
    const qrToken = crypto.randomBytes(32).toString('hex');
  
    const sesion = this.sesionRepository.create({
      nombreSesion,
      numeroTelefono,
      qrToken,
    });
  
    const savedSesion = await this.sesionRepository.save(sesion);
    const qrCode = await this.iniciarClienteWhatsApp(savedSesion.idSesion);
  
    return {
      idSesion: savedSesion.idSesion,
      qrToken,
      qrCode, // Este es el mismo texto que salía en console.log
    };
  }

  iniciarClienteWhatsApp(idSesion: number): Promise<string> {
    return new Promise((resolve) => {
      const client = new Client({
        authStrategy: new LocalAuth({ clientId: `sesion_${idSesion}` }),
        puppeteer: {
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        },
      });
  
      client.on('qr', (qr) => {
        console.log(`\n===== QR PARA SESIÓN ${idSesion} =====`);
        console.log(qr);
        console.log('=====================================\n');
  
        this.qrCodes.set(idSesion, qr);
        resolve(qr); // Devuelve el QR al primer evento recibido
      });
  
      client.on('ready', async () => {
        console.log(`✅ Cliente ${idSesion} está listo y conectado!`);
        await this.actualizarEstadoSesion(idSesion, 'activa');
        this.qrCodes.delete(idSesion);
      });
  
      client.on('disconnected', async () => {
        console.log(`⚠️ Cliente ${idSesion} desconectado`);
        await this.actualizarEstadoSesion(idSesion, 'inactiva');
        this.qrCodes.delete(idSesion);
      });
  
      client.initialize();
      this.clients.set(idSesion, client);
    });
  }
  
  

  async obtenerQrToken(idSesion: number): Promise<{ qrToken: string | null, qrCode?: string }> {
    const sesion = await this.sesionRepository.findOne({ where: { idSesion } });
    if (!sesion) return { qrToken: null };

    const qrCode = this.qrCodes.get(idSesion);
    
    return {
      qrToken: sesion.qrToken,
      qrCode: qrCode || undefined
    };
  }

  async obtenerTodasSesiones(): Promise<Sesion[]> {
    return this.sesionRepository.find();
  }

  async obtenerSesionPorId(idSesion: number): Promise<Sesion> {
    return this.sesionRepository.findOne({ where: { idSesion } });
  }

  async actualizarEstadoSesion(idSesion: number, estado: 'activa' | 'inactiva' | 'expirada'): Promise<void> {
    await this.sesionRepository.update(idSesion, {
      estado,
      fechaUltimaActividad: new Date(),
    });
  }






}