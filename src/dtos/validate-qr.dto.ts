import { IsNumber, IsString } from 'class-validator';

export class ValidateQrDto {
  @IsNumber()
  session_id: number;

  @IsString()
  token: string;
}