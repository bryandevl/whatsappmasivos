import { ReporteLlamadasService } from 'src/services/agentelog.service';
import { UserLogService } from 'src/services/userlog.service'; 
import { agentDTO } from 'src/dtos/agent.dto';
import { userDTO } from 'src/dtos/userlog.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

//import { convertRows, HeadCorreo, Headagentelog, Headuserlog } from 'src/utils';


@Controller('test')
@ApiTags('test')
export class TestController {
  constructor(
    private readonly ReportAgentelog: ReporteLlamadasService,
    private readonly UserlogReport : UserLogService


  ) {}

 

  @Post('usertlog')
  @ApiOperation({ summary: 'Obtener el reporte de llamadas' })
  async getUser(@Body() data: userDTO) {
    try {
      // Log para verificar los parámetros recibidos
      console.log('Received data:', data);

      const { campaignIds, startDate, endDate,grupouser } = data;

      // Verificar los parámetros recibidos
      console.log('campaignIds:', campaignIds);
      console.log('startDate:', startDate);
      console.log('endDate:', endDate);

      // Llamar al servicio
      const movistar = await this.UserlogReport.obtenerUserlog(
        startDate,
        endDate,
        campaignIds.join(','),
        grupouser.join(','), // Convertir array a cadena separada por comas
      );

      // Log para verificar el resultado del servicio
      console.log('Agent log data:', movistar);

      // Devolver los resultados o un mensaje si no hay datos
      return movistar.length > 0 ? movistar : { message: 'No data found' };

    } catch (error) {
      // Capturar cualquier error durante la ejecución
      console.error('Error obteniendo el reporte de llamadas:', error);
      return { message: 'Error obteniendo los datos' };
    }
  }

  @Post('agentlog')
  @ApiOperation({ summary: 'Obtener el reporte de llamadas' })
  async getTest(@Body() data: agentDTO) {
    try {
      // Log para verificar los parámetros recibidos
      console.log('Received data:', data);

      const { campaignIds, startDate, endDate,grupouser } = data;

      // Verificar los parámetros recibidos
      console.log('campaignIds:', campaignIds);
      console.log('startDate:', startDate);
      console.log('endDate:', endDate);

      // Llamar al servicio
      const movistar = await this.ReportAgentelog.obtenerReporteLlamadas(
        startDate,
        endDate,
        campaignIds.join(','),
        grupouser.join(','), // Convertir array a cadena separada por comas
      );

      // Log para verificar el resultado del servicio
      console.log('Agent log data:', movistar);

      // Devolver los resultados o un mensaje si no hay datos
      return movistar.length > 0 ? movistar : { message: 'No data found' };

    } catch (error) {
      // Capturar cualquier error durante la ejecución
      console.error('Error obteniendo el reporte de llamadas:', error);
      return { message: 'Error obteniendo los datos' };
    }
  }

}
