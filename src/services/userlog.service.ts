import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ReporteXusuarios } from 'src/entities/user_log.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserLogService {
  constructor(
    @InjectRepository(ReporteXusuarios)
    private readonly reporteLlamadasRepository: Repository<ReporteXusuarios>,
  ) {}

  async obtenerUserlog(fechaInicio: string, fechaFin: string, campaignIds: string,grupouser:string ): Promise<ReporteXusuarios[]> {
    // Ejecutar el procedimiento almacenado
    const result = await this.reporteLlamadasRepository.query(
      `CALL ReporteXusuarios('${fechaInicio}', '${fechaFin}', '${campaignIds}','${grupouser}')`,
    );

    // Log para depuración
    console.log('Resultado del procedimiento:', result);

    // Si los datos ya vienen en el formato correcto, devolverlos directamente
    return result[0];
  }
}
