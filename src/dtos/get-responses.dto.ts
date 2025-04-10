// get-responses.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, Min } from 'class-validator';

export class GetResponsesDto {
  @ApiProperty({ description: 'ID del número masivo', required: false })
  @IsNumber()
  @IsOptional()
  massNumberId?: number;

  @ApiProperty({ description: 'ID del envío masivo', required: false })
  @IsNumber()
  @IsOptional()
  sendingId?: number;

  @ApiProperty({ description: 'ID de la sesión', required: false })
  @IsNumber()
  @IsOptional()
  sessionId?: number;

  @ApiProperty({ description: 'Número de página', required: false, default: 1 })
  @IsNumber()
  @Min(1)
  @IsOptional()
  page?: number = 1;

  @ApiProperty({ description: 'Límite por página', required: false, default: 10 })
  @IsNumber()
  @Min(1)
  @IsOptional()
  limit?: number = 10;
}