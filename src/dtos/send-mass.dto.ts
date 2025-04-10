import { IsNotEmpty, IsNumber } from 'class-validator';

export class MassSendDto {
  @IsNotEmpty()
  @IsNumber()
  sessionId: number;
}