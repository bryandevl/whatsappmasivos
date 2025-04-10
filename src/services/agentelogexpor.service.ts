import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ReporteLlamadasResult } from 'src/entities/agente_log.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReporteLlamadasServices {
  constructor(
    @InjectRepository(ReporteLlamadasResult)
    private readonly reporteLlamadasRepository: Repository<ReporteLlamadasResult>,
  ) {}

  async obtenerReporteLlamadas(
    fechaInicio: string,
    fechaFin: string,
    campaignIds: string,
    grupouser: string,
  ): Promise<ReporteLlamadasResult[]> {
    // Ejecutar el procedimiento almacenado
    const result = await this.reporteLlamadasRepository.query(
      `CALL ReporteLlamadas('${fechaInicio}', '${fechaFin}', '${campaignIds}','${grupouser}')`,
    );

    // Log para depuración
    console.log('Resultado del procedimiento:', result);

    // Convertir y formatear los campos de tiempo de varchar a datetime o number según corresponda
    const reporteLlamadas = result[0].map((row) => {
      return {
        ...row,
        Tiempo_Logueo: this.convertToTime(row.Tiempo_Logueo),
        Wait: this.convertToTime(row.Wait),
        Talk: this.convertToTime(row.Talk),
        ACW: this.convertToTime(row.ACW),
        Pausa: this.convertToTime(row.Pausa),
        Dead_Call: this.convertToTime(row.Dead_Call),
        Avg_Talk: this.convertToTime(row.Avg_Talk),
        Avg_ACW: this.convertToTime(row.Avg_ACW),
        Avg_Wait: this.convertToTime(row.Avg_Wait),
        ANDIAL: this.convertToTime(row.ANDIAL),
        BREAK: this.convertToTime(row.BREAK),
        CAPA: this.convertToTime(row.CAPA),
        GES_M: this.convertToTime(row.GES_M),
        LAGGED: this.convertToTime(row.LAGGED),
        LOGIN: this.convertToTime(row.LOGIN),
        NXDIAL: this.convertToTime(row.NXDIAL),
        OMNI: this.convertToTime(row.OMNI),
        RRHH: this.convertToTime(row.RRHH),
        SOPO: this.convertToTime(row.SOPO),
        SSHH: this.convertToTime(row.SSHH),
        // Puedes agregar más conversiones si es necesario
      };
    });

    // Devolver los resultados ya convertidos
    return reporteLlamadas;
  }

  // Función para convertir un tiempo de tipo varchar (HH:mm:ss) a un objeto Date o el tipo adecuado
  private convertToTime(time: string): string {
    // Comprobar si el valor es un tiempo válido
    if (time && /^(\d{2}):(\d{2}):(\d{2})$/.test(time)) {
      const [hours, minutes, seconds] = time.split(':').map(Number);
      const date = new Date();
      date.setHours(hours, minutes, seconds, 0);
      return date.toISOString(); // Devuelve el valor como ISO string, puedes adaptarlo según el formato que necesites
    }
    return time; // Si no es un tiempo válido, simplemente devolverlo como está
  }
}
