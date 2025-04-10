import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEnvioMasivoDto {
  @IsNumber()
  @IsNotEmpty()
  id_usuario: number;

  @IsNumber()
  @IsNotEmpty()
  id_sesion: number;

  @IsString()
  @IsNotEmpty()
  celular_origen: string;
}

// src/envios-masivos/dto/envio-masivo-excel.dto.ts
export class EnvioExcelRow {
  numero: string;
  mensaje: string;
}