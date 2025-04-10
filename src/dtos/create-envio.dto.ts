import { IsString, IsDate, IsArray } from 'class-validator';

export class CreateEnvioDto {
  @IsString()
  archivo: string;

  @IsString()
  estado: string;

  @IsDate()
  created_at: Date;

  @IsArray()
  numeros: { numero: string, mensaje: string }[];
}
