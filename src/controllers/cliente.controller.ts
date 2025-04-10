import { ReporteLlamadasService } from 'src/services/agentelog.service';
import { UserLogService } from 'src/services/userlog.service'; 
import { Body, Controller, Post, Response } from '@nestjs/common';
import { Headagentelog, Headuserlog } from 'src/utils';

import * as ExcelJS from 'exceljs';
import * as JSZip from 'jszip';

@Controller('cliente')
export class ClienteController {
    constructor(
        private readonly ReportAgentelog: ReporteLlamadasService,
        private readonly UserlogReport: UserLogService
    ) {}

    @Post('generate-report')
    async generateReport(@Body() data: any, @Response() res: any) {
        try {
            const { campaignIds, startDate, endDate, grupouser } = data;

            const userLogData = await this.UserlogReport.obtenerUserlog(
                startDate,
                endDate,
                campaignIds.join(','),
                grupouser.join(',')
            );

            const agentLogData = await this.ReportAgentelog.obtenerReporteLlamadas(
                startDate,
                endDate,
                campaignIds.join(','),
                grupouser.join(',')
            );

            if (!userLogData.length && !agentLogData.length) {
                return { message: 'No data found' };
            }

            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Reporte Llamadas');

            worksheet.columns = [
                ...Headuserlog.map((col) => ({ header: col.column, key: col.value, width: col.width })), 
                ...Headagentelog.map((col) => ({ header: col.column, key: col.value, width: col.width })),
            ];

            const combinedData = this.combineData(userLogData, agentLogData);

            combinedData.forEach((row) => {
                // Convertir las columnas de tiempo a formato de Excel
                row.Tiempo_Logueo = this.convertToExcelTime(row.Tiempo_Logueo);
                row.Wait = this.convertToExcelTime(row.Wait);
                row.Talk = this.convertToExcelTime(row.Talk);
                row.Inicio_Logueo = this.convertToExcelTime(row.Inicio_Logueo);
                row.FIN_Logueo = this.convertToExcelTime(row.FIN_Logueo);
                row.ACW = this.convertToExcelTime(row.ACW);
                row.Pausa = this.convertToExcelTime(row.Pausa);
                row.Dead_Call = this.convertToExcelTime(row.Dead_Call);
                row.Avg_Talk = this.convertToExcelTime(row.Avg_Talk);
                row.Avg_ACW = this.convertToExcelTime(row.Avg_ACW);
                row.Avg_Wait = this.convertToExcelTime(row.Avg_Wait);
                row.undefined = this.convertToExcelTime(row.undefined);
                row.ANDIAL = this.convertToExcelTime(row.ANDIAL);
                row.BREAK = this.convertToExcelTime(row.BREAK);
                row.CAPA = this.convertToExcelTime(row.CAPA);
                row.GES_M = this.convertToExcelTime(row.GES_M);
                row.LAGGED = this.convertToExcelTime(row.LAGGED);
                row.LOGIN = this.convertToExcelTime(row.LOGIN);
                row.NXDIAL = this.convertToExcelTime(row.NXDIAL);
                row.OMNI = this.convertToExcelTime(row.OMNI);
                row.RRHH = this.convertToExcelTime(row.RRHH);
                row.SOPO = this.convertToExcelTime(row.SOPO);
                row.SSHH = this.convertToExcelTime(row.SSHH);

                // Convertir el porcentaje a decimal si tiene el símbolo '%'
                ['%CONV', '%Wait', '%Talk','%ACW','%Pausa','%Dead_Call'].forEach((col) => {
                    if (row[col] && typeof row[col] === 'string' && row[col].endsWith('%')) {
                        row[col] = parseFloat(row[col].replace('%', '')) / 100;
                    } else if (row[col] === null || row[col] === undefined) {
                        row[col] = 0;  // Si el valor es null o undefined, poner 0.
                    }
                });

                // Añadir fila al worksheet
                const newRow = worksheet.addRow(row);

                // Aplicar formato de porcentaje a columnas específicas
                const porcentajeColumns = [11, 14,16,18,20,22];  // Ajusta las columnas si es necesario
                porcentajeColumns.forEach((colIndex) => {
                    if (newRow.getCell(colIndex)) {
                        newRow.getCell(colIndex).numFmt = '0.00%';
                    }
                });
            });

            // Aplicar formato a las celdas en función del número de columna
            worksheet.eachRow((row) => {
                row.eachCell((cell, colNumber) => {
                    // Formato de tiempo [h]:mm:ss en las columnas especificadas
                    if ([6, 7, 12, 13, 15,17,19,21,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37].includes(colNumber)) {
                        cell.numFmt = '[h]:mm:ss';
                    } 
                    // Formato de porcentaje en la columna 11
                    else if ([11, 14,16,18,20,22].includes(colNumber)) {  
                        cell.numFmt = '0.00%';
                    }
                });
            });

            // Generar el buffer de Excel
            const buffer = await workbook.xlsx.writeBuffer();

            // Crear un archivo comprimido ZIP
            const zip = new JSZip();
            zip.file('Tiempos_Operativos.xlsx', buffer);

            const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });

            // Configurar los encabezados de respuesta para descargar el ZIP
            res.setHeader('Content-Type', 'application/zip');
            res.setHeader('Content-Disposition', 'attachment; filename=reporte_llamadas.zip');
            res.setHeader('Content-Length', zipBuffer.length);

            // Enviar el archivo comprimido
            res.end(zipBuffer);

        } catch (error) {
            console.error('Error generando el reporte:', error);
            res.status(500).send({ message: 'Error generando el reporte' });
        }
    }

    private combineData(userLogData: any[], agentLogData: any[]) {
        const combinedData = [];
        const maxLength = Math.max(userLogData.length, agentLogData.length);

        for (let i = 0; i < maxLength; i++) {
            const userLog = userLogData[i] || {};
            const agentLog = agentLogData[i] || {};

            combinedData.push({
                ...userLog,
                ...agentLog,
            });
        }

        return combinedData;
    }

    private convertToExcelTime(time: string): number {
        if (time && /^(\d{2}):(\d{2}):(\d{2})$/.test(time)) {
            const [hours, minutes, seconds] = time.split(':').map(Number);
            const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
            return totalSeconds / 86400;
        }
        return 0;
    }
}
