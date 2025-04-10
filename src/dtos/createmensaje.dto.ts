import { IsString, IsDate } from 'class-validator';

export class CreateMensajeDto {
  @IsString()
  numero_origen: string;

  @IsString()
  mensaje: string;

  @IsDate()
  fecha: Date;

  @IsString()
  whatsapp_message_id: string;
}
