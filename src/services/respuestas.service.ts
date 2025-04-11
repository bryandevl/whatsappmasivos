import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RespuestaMensaje   } from '../entities/respuesta-mensaje.entity';

@Injectable()
export class RespuestasMensajesService {
  constructor(
    @InjectRepository(RespuestaMensaje)
    private readonly respuestaMensajeRepository: Repository<RespuestaMensaje>,
  ) {}

  async obtenerNumerosOrigenDistintos(): Promise<{ [key: string]: string }> {
    const resultados = await this.respuestaMensajeRepository
      .createQueryBuilder()
      .select('DISTINCT(numero_origen)', 'numero_origen')
      .orderBy('numero_origen', 'ASC')
      .getRawMany();
  
    const numeros = resultados.map(item => item.numero_origen);
    
    // Convertir array a objeto con claves numeradas
    const resultadoFormateado: { [key: string]: string } = {};
    numeros.forEach((numero, index) => {
      resultadoFormateado[`celular ${index}`] = numero;
    });
  
    return resultadoFormateado;
  }  


  async obtenerConversacionPorNumero(numero: string): Promise<any[]> {
    const result = await this.respuestaMensajeRepository.query(
      'CALL ObtenerConversacionPorID(?)', 
      [numero]
    );
    
    // Normalizar la respuesta según cómo devuelva los datos tu BD
    // Algunas BD devuelven el resultado en el primer elemento de un array
    return Array.isArray(result[0]) ? result[0] : result;
  }

}