import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsString, IsOptional } from "class-validator";

export class agentDTO {
  @IsArray() 
  @IsNotEmpty() 
  @IsString({ each: true })
  campaignIds: string[];

  @IsArray() 
  @IsNotEmpty() 
  @IsString({ each: true })
  grupouser: string[];



  @IsString() 
  @IsNotEmpty() 
  startDate: string;

  @IsString() 
  @IsNotEmpty() 
  endDate: string;
}
