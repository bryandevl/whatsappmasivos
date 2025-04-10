import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ReporteLlamadasResult } from 'src/entities/agente_log.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReporteLlamadasService {
  constructor(
    @InjectRepository(ReporteLlamadasResult)
    private readonly reporteLlamadasRepository: Repository<ReporteLlamadasResult>,
  ) {}

  async obtenerReporteLlamadas(fechaInicio: string, fechaFin: string, campaignIds: string,grupouser:string ): Promise<ReporteLlamadasResult[]> {
    // Ejecutar el procedimiento almacenado
    const result = await this.reporteLlamadasRepository.query(
      `CALL ReporteLlamadas('${fechaInicio}', '${fechaFin}', '${campaignIds}','${grupouser}')`,
    );

    // Log para depuración
    console.log('Resultado del procedimiento:', result);

    // Si los datos ya vienen en el formato correcto, devolverlos directamente
    return result[0];
  }
  
}
