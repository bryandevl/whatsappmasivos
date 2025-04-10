import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import config, { validation } from './config/config';
import * as Joi from 'joi';
import { TestController } from './controllers/test.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEmitterModule } from '@nestjs/event-emitter'; // Importación añadida

import { ReporteLlamadasResult } from './entities/agente_log.entity';
import { ReporteLlamadasService } from './services/agentelog.service';
import { ReporteLlamadasServices } from './services/agentelogexpor.service';

import { UserLogService } from './services/userlog.service';
import { ReporteXusuarios } from './entities/user_log.entity';
import { ClienteController } from './controllers/cliente.controller';
import { NumeroMasivo   } from './entities/numeros_masivos.entity';
import { EnvioMasivo } from './entities/envios_masivos.entity';
import { SesionWhatsapp   } from './entities/sesiones_whatsapp.entity';
import { SesionesController } from './controllers/sesiones.controller';
import { Sesion } from './entities/sesion.entity';
import { SesionesService } from './services/sesiones.service';
import { EnvioMasivoCabecera } from './entities/envio-masivo-cabecera.entity';
import { EnvioDetalle } from './entities/envio-detalle.entity';
import { RespuestaMensaje } from './entities/respuesta-mensaje.entity';
import { EnviosMasivosController } from './controllers/envios-masivos.controller';
import { EnviosMasivosService } from './services/envios-masivos.service';








@Module({
  imports: [
    EventEmitterModule.forRoot(), // Módulo añadido aquí
    TypeOrmModule.forFeature([
      ReporteLlamadasResult,
      ReporteXusuarios,
      NumeroMasivo,
      EnvioMasivo,
      SesionWhatsapp,
      Sesion,
      EnvioMasivoCabecera,
      EnvioDetalle,
      RespuestaMensaje,
    
    ]),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [config],
      validationSchema: Joi.object(validation),
    }),
    DatabaseModule,
  ],
  providers: [
    ReporteLlamadasService,
    UserLogService,
    ReporteLlamadasServices,
    SesionesService,
    EnviosMasivosService,
    
 
  ],
  controllers: [
    AppController,
    TestController,
    ClienteController,
    SesionesController,
    EnviosMasivosController,
    
  ],
})
export class AppModule {}