import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EnvioMasivo } from 'src/entities/envios_masivos.entity';
import {NumeroMasivo} from 'src/entities/numeros_masivos.entity';
import { MensajesRespuesta } from 'src/entities/mensajes_respuesta.entity'; 
  import { SesionWhatsapp } from 'src/entities/sesiones_whatsapp.entity';





import { Client } from 'whatsapp-web.js';
import { CreateEnvioDto } from 'src/dtos/create-envio.dto';

@Injectable()
export class WhatsAppService {
  constructor(
    @InjectRepository(SesionWhatsapp)
    private readonly sesionesWhatsappRepository: Repository<SesionWhatsapp>,
    @InjectRepository(EnvioMasivo)
    private readonly enviosMasivosRepository: Repository<EnvioMasivo>,
    @InjectRepository(NumeroMasivo)
    private readonly numerosMasivosRepository: Repository<NumeroMasivo>,
    @InjectRepository(MensajesRespuesta)
    private readonly mensajesRespuestaRepository: Repository<MensajesRespuesta>
  ) {}

  async scanQr(): Promise<string> {
    // Lógica para escanear QR y retornar la URL
    const client = new Client({ puppeteer: { headless: true } });
    client.on('qr', (qr) => {
      console.log('QR RECEIVED', qr);
      // Aquí lo puedes guardar o devolver como respuesta
    });
    client.initialize();
    return 'Escanear el código QR.';
  }

  async sendMassiveMessages(createEnvioDto: CreateEnvioDto): Promise<string> {
    // Aquí envías los mensajes masivos con el número registrado
    const { archivo, estado, created_at, numeros } = createEnvioDto;

    const envio = this.enviosMasivosRepository.create({
      archivo,
      estado,
      created_at,
      numeros: numeros.map((numero) => this.numerosMasivosRepository.create(numero)),
    });

    await this.enviosMasivosRepository.save(envio);

    // Enviar mensajes utilizando WhatsApp Web.js API
    const client = new Client({ puppeteer: { headless: true } });
    await client.initialize();

    for (let numero of numeros) {
      const chat = await client.getChatById(numero.numero);
      await chat.sendMessage(numero.mensaje);

      // Guardar los mensajes enviados en la base de datos
      const mensajeEnvio = new MensajesRespuesta();
      mensajeEnvio.numero_origen = numero.numero;
      mensajeEnvio.mensaje = numero.mensaje;
      mensajeEnvio.fecha = new Date();
      mensajeEnvio.whatsapp_message_id = 'mensaje_id';
      await this.mensajesRespuestaRepository.save(mensajeEnvio);
    }

    return 'Mensajes enviados correctamente';
  }
}
