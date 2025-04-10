import { IsNotEmpty, IsNumber } from 'class-validator';

export class MessageResponseDto {
  @IsNotEmpty()
  @IsNumber()
  massNumberId: number;
}