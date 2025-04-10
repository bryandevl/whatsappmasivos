import { IsNotEmpty, IsPhoneNumber } from "class-validator";

export class CreateSesionDto {
  @IsNotEmpty()
  @IsPhoneNumber() // Usa @IsPhoneNumber de class-validator
  numero: string;
}