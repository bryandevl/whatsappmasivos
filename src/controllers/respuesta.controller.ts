import { Controller, Post, Body } from '@nestjs/common';
import { RespuestasMensajesService  } from '../services/respuestas.service';

@Controller('mensajes')
export class RespuestasMensajesController {
  constructor(
    private readonly respuestasMensajesService: RespuestasMensajesService,
  ) {}

  @Post('numeros')
  async obtenerNumerosOrigenDistintos() {
    return this.respuestasMensajesService.obtenerNumerosOrigenDistintos();
  }


  @Post('chat')
  async obtenerConversacion(@Body() body: any) {
    // Extraer el número aunque venga como string directo o como objeto
    let numero: string;
    
    if (typeof body === 'string') {
      numero = body;
    } else if (body?.numero) {
      numero = body.numero;
    } else {
      throw new Error('Se requiere un número válido en el cuerpo de la petición');
    }
  
    // Validar formato del número (opcional)
    if (!/^[0-9]+$/.test(numero)) {
      throw new Error('El número debe contener solo dígitos');
    }
  
    return this.respuestasMensajesService.obtenerConversacionPorNumero(numero);
  }

}