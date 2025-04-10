/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./controllers/app.controller */ "./src/controllers/app.controller.ts");
const database_module_1 = __webpack_require__(/*! ./database/database.module */ "./src/database/database.module.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const config_2 = __webpack_require__(/*! ./config/config */ "./src/config/config.ts");
const Joi = __webpack_require__(/*! joi */ "joi");
const test_controller_1 = __webpack_require__(/*! ./controllers/test.controller */ "./src/controllers/test.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const agente_log_entity_1 = __webpack_require__(/*! ./entities/agente_log.entity */ "./src/entities/agente_log.entity.ts");
const agentelog_service_1 = __webpack_require__(/*! ./services/agentelog.service */ "./src/services/agentelog.service.ts");
const agentelogexpor_service_1 = __webpack_require__(/*! ./services/agentelogexpor.service */ "./src/services/agentelogexpor.service.ts");
const userlog_service_1 = __webpack_require__(/*! ./services/userlog.service */ "./src/services/userlog.service.ts");
const user_log_entity_1 = __webpack_require__(/*! ./entities/user_log.entity */ "./src/entities/user_log.entity.ts");
const cliente_controller_1 = __webpack_require__(/*! ./controllers/cliente.controller */ "./src/controllers/cliente.controller.ts");
const numeros_masivos_entity_1 = __webpack_require__(/*! ./entities/numeros_masivos.entity */ "./src/entities/numeros_masivos.entity.ts");
const envios_masivos_entity_1 = __webpack_require__(/*! ./entities/envios_masivos.entity */ "./src/entities/envios_masivos.entity.ts");
const sesiones_whatsapp_entity_1 = __webpack_require__(/*! ./entities/sesiones_whatsapp.entity */ "./src/entities/sesiones_whatsapp.entity.ts");
const sesiones_controller_1 = __webpack_require__(/*! ./controllers/sesiones.controller */ "./src/controllers/sesiones.controller.ts");
const sesion_entity_1 = __webpack_require__(/*! ./entities/sesion.entity */ "./src/entities/sesion.entity.ts");
const sesiones_service_1 = __webpack_require__(/*! ./services/sesiones.service */ "./src/services/sesiones.service.ts");
const envio_masivo_cabecera_entity_1 = __webpack_require__(/*! ./entities/envio-masivo-cabecera.entity */ "./src/entities/envio-masivo-cabecera.entity.ts");
const envio_detalle_entity_1 = __webpack_require__(/*! ./entities/envio-detalle.entity */ "./src/entities/envio-detalle.entity.ts");
const respuesta_mensaje_entity_1 = __webpack_require__(/*! ./entities/respuesta-mensaje.entity */ "./src/entities/respuesta-mensaje.entity.ts");
const envios_masivos_controller_1 = __webpack_require__(/*! ./controllers/envios-masivos.controller */ "./src/controllers/envios-masivos.controller.ts");
const envios_masivos_service_1 = __webpack_require__(/*! ./services/envios-masivos.service */ "./src/services/envios-masivos.service.ts");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            event_emitter_1.EventEmitterModule.forRoot(),
            typeorm_1.TypeOrmModule.forFeature([
                agente_log_entity_1.ReporteLlamadasResult,
                user_log_entity_1.ReporteXusuarios,
                numeros_masivos_entity_1.NumeroMasivo,
                envios_masivos_entity_1.EnvioMasivo,
                sesiones_whatsapp_entity_1.SesionWhatsapp,
                sesion_entity_1.Sesion,
                envio_masivo_cabecera_entity_1.EnvioMasivoCabecera,
                envio_detalle_entity_1.EnvioDetalle,
                respuesta_mensaje_entity_1.RespuestaMensaje,
            ]),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
                load: [config_2.default],
                validationSchema: Joi.object(config_2.validation),
            }),
            database_module_1.DatabaseModule,
        ],
        providers: [
            agentelog_service_1.ReporteLlamadasService,
            userlog_service_1.UserLogService,
            agentelogexpor_service_1.ReporteLlamadasServices,
            sesiones_service_1.SesionesService,
            envios_masivos_service_1.EnviosMasivosService,
        ],
        controllers: [
            app_controller_1.AppController,
            test_controller_1.TestController,
            cliente_controller_1.ClienteController,
            sesiones_controller_1.SesionesController,
            envios_masivos_controller_1.EnviosMasivosController,
        ],
    })
], AppModule);


/***/ }),

/***/ "./src/common/response.ts":
/*!********************************!*\
  !*** ./src/common/response.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.customResponse = void 0;
const customResponse = (message = 'Operacion Exitosa', body = null, statusCode = 200) => {
    return {
        statusCode,
        message,
        body,
    };
};
exports.customResponse = customResponse;


/***/ }),

/***/ "./src/config/config.ts":
/*!******************************!*\
  !*** ./src/config/config.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validation = void 0;
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const Joi = __webpack_require__(/*! joi */ "joi");
exports["default"] = (0, config_1.registerAs)('config', () => ({
    port: process.env.PORT,
    host: process.env.HOST,
    port_db: process.env.PORT_DB,
    user_name: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
}));
exports.validation = {
    PORT: Joi.number().required(),
    HOST: Joi.string().required(),
    PORT_DB: Joi.number().required(),
    USER_NAME: Joi.string().required(),
    PASSWORD: Joi.string().required(),
    DATABASE: Joi.string().required(),
};


/***/ }),

/***/ "./src/controllers/app.controller.ts":
/*!*******************************************!*\
  !*** ./src/controllers/app.controller.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const excel_dto_1 = __webpack_require__(/*! ../dtos/excel.dto */ "./src/dtos/excel.dto.ts");
const node_1 = __webpack_require__(/*! write-excel-file/node */ "write-excel-file/node");
const response_1 = __webpack_require__(/*! ../common/response */ "./src/common/response.ts");
const utils_1 = __webpack_require__(/*! src/utils */ "./src/utils.ts");
let AppController = exports.AppController = class AppController {
    async getExcel(dto) {
        const schema = (0, utils_1.convertRows)(dto.schema);
        const data = dto.data;
        const buffer = await (0, node_1.default)(data, {
            schema,
            buffer: true,
        });
        return (0, response_1.customResponse)('excel', buffer.toString('base64'));
    }
};
__decorate([
    (0, common_1.Post)('excel'),
    (0, swagger_1.ApiOperation)({ summary: 'Reporte de RUCs' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof excel_dto_1.ExcelDto !== "undefined" && excel_dto_1.ExcelDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getExcel", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);


/***/ }),

/***/ "./src/controllers/cliente.controller.ts":
/*!***********************************************!*\
  !*** ./src/controllers/cliente.controller.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClienteController = void 0;
const agentelog_service_1 = __webpack_require__(/*! src/services/agentelog.service */ "./src/services/agentelog.service.ts");
const userlog_service_1 = __webpack_require__(/*! src/services/userlog.service */ "./src/services/userlog.service.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const utils_1 = __webpack_require__(/*! src/utils */ "./src/utils.ts");
const ExcelJS = __webpack_require__(/*! exceljs */ "exceljs");
const JSZip = __webpack_require__(/*! jszip */ "jszip");
let ClienteController = exports.ClienteController = class ClienteController {
    constructor(ReportAgentelog, UserlogReport) {
        this.ReportAgentelog = ReportAgentelog;
        this.UserlogReport = UserlogReport;
    }
    async generateReport(data, res) {
        try {
            const { campaignIds, startDate, endDate, grupouser } = data;
            const userLogData = await this.UserlogReport.obtenerUserlog(startDate, endDate, campaignIds.join(','), grupouser.join(','));
            const agentLogData = await this.ReportAgentelog.obtenerReporteLlamadas(startDate, endDate, campaignIds.join(','), grupouser.join(','));
            if (!userLogData.length && !agentLogData.length) {
                return { message: 'No data found' };
            }
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Reporte Llamadas');
            worksheet.columns = [
                ...utils_1.Headuserlog.map((col) => ({ header: col.column, key: col.value, width: col.width })),
                ...utils_1.Headagentelog.map((col) => ({ header: col.column, key: col.value, width: col.width })),
            ];
            const combinedData = this.combineData(userLogData, agentLogData);
            combinedData.forEach((row) => {
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
                ['%CONV', '%Wait', '%Talk', '%ACW', '%Pausa', '%Dead_Call'].forEach((col) => {
                    if (row[col] && typeof row[col] === 'string' && row[col].endsWith('%')) {
                        row[col] = parseFloat(row[col].replace('%', '')) / 100;
                    }
                    else if (row[col] === null || row[col] === undefined) {
                        row[col] = 0;
                    }
                });
                const newRow = worksheet.addRow(row);
                const porcentajeColumns = [11, 14, 16, 18, 20, 22];
                porcentajeColumns.forEach((colIndex) => {
                    if (newRow.getCell(colIndex)) {
                        newRow.getCell(colIndex).numFmt = '0.00%';
                    }
                });
            });
            worksheet.eachRow((row) => {
                row.eachCell((cell, colNumber) => {
                    if ([6, 7, 12, 13, 15, 17, 19, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37].includes(colNumber)) {
                        cell.numFmt = '[h]:mm:ss';
                    }
                    else if ([11, 14, 16, 18, 20, 22].includes(colNumber)) {
                        cell.numFmt = '0.00%';
                    }
                });
            });
            const buffer = await workbook.xlsx.writeBuffer();
            const zip = new JSZip();
            zip.file('Tiempos_Operativos.xlsx', buffer);
            const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });
            res.setHeader('Content-Type', 'application/zip');
            res.setHeader('Content-Disposition', 'attachment; filename=reporte_llamadas.zip');
            res.setHeader('Content-Length', zipBuffer.length);
            res.end(zipBuffer);
        }
        catch (error) {
            console.error('Error generando el reporte:', error);
            res.status(500).send({ message: 'Error generando el reporte' });
        }
    }
    combineData(userLogData, agentLogData) {
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
    convertToExcelTime(time) {
        if (time && /^(\d{2}):(\d{2}):(\d{2})$/.test(time)) {
            const [hours, minutes, seconds] = time.split(':').map(Number);
            const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
            return totalSeconds / 86400;
        }
        return 0;
    }
};
__decorate([
    (0, common_1.Post)('generate-report'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "generateReport", null);
exports.ClienteController = ClienteController = __decorate([
    (0, common_1.Controller)('cliente'),
    __metadata("design:paramtypes", [typeof (_a = typeof agentelog_service_1.ReporteLlamadasService !== "undefined" && agentelog_service_1.ReporteLlamadasService) === "function" ? _a : Object, typeof (_b = typeof userlog_service_1.UserLogService !== "undefined" && userlog_service_1.UserLogService) === "function" ? _b : Object])
], ClienteController);


/***/ }),

/***/ "./src/controllers/envios-masivos.controller.ts":
/*!******************************************************!*\
  !*** ./src/controllers/envios-masivos.controller.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnviosMasivosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const envios_masivos_service_1 = __webpack_require__(/*! ../services/envios-masivos.service */ "./src/services/envios-masivos.service.ts");
const create_envio_masivo_dto_1 = __webpack_require__(/*! ../dtos/create-envio-masivo.dto */ "./src/dtos/create-envio-masivo.dto.ts");
let EnviosMasivosController = exports.EnviosMasivosController = class EnviosMasivosController {
    constructor(enviosMasivosService) {
        this.enviosMasivosService = enviosMasivosService;
    }
    async enviarMasivo(file, createEnvioMasivoDto) {
        return this.enviosMasivosService.procesarEnvioMasivoExcel(file, createEnvioMasivoDto);
    }
    async obtenerTodos() {
        return this.enviosMasivosService.obtenerTodosEnviosMasivos();
    }
    async obtenerPorId(id) {
        return this.enviosMasivosService.obtenerEnvioMasivo(id);
    }
    async obtenerRespuestas(numero) {
        return this.enviosMasivosService.obtenerRespuestas(numero);
    }
};
__decorate([
    (0, common_1.Post)('enviar'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('archivo')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof Express !== "undefined" && (_b = Express.Multer) !== void 0 && _b.File) === "function" ? _c : Object, typeof (_d = typeof create_envio_masivo_dto_1.CreateEnvioMasivoDto !== "undefined" && create_envio_masivo_dto_1.CreateEnvioMasivoDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], EnviosMasivosController.prototype, "enviarMasivo", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EnviosMasivosController.prototype, "obtenerTodos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EnviosMasivosController.prototype, "obtenerPorId", null);
__decorate([
    (0, common_1.Get)('respuestas/:numero'),
    __param(0, (0, common_1.Param)('numero')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EnviosMasivosController.prototype, "obtenerRespuestas", null);
exports.EnviosMasivosController = EnviosMasivosController = __decorate([
    (0, common_1.Controller)('envios-masivos'),
    __metadata("design:paramtypes", [typeof (_a = typeof envios_masivos_service_1.EnviosMasivosService !== "undefined" && envios_masivos_service_1.EnviosMasivosService) === "function" ? _a : Object])
], EnviosMasivosController);


/***/ }),

/***/ "./src/controllers/sesiones.controller.ts":
/*!************************************************!*\
  !*** ./src/controllers/sesiones.controller.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SesionesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sesiones_service_1 = __webpack_require__(/*! src/services/sesiones.service */ "./src/services/sesiones.service.ts");
let SesionesController = exports.SesionesController = class SesionesController {
    constructor(sesionesService) {
        this.sesionesService = sesionesService;
    }
    async generarQrDesdeBody(body) {
        const { nombreSesion, numeroTelefono } = body;
        const { idSesion, qrToken } = await this.sesionesService.crearSesion(nombreSesion, numeroTelefono);
        const { qrCode } = await this.sesionesService.obtenerQrToken(idSesion);
        return { idSesion, qrToken, qrCode };
    }
};
__decorate([
    (0, common_1.Post)('generar-qr'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], SesionesController.prototype, "generarQrDesdeBody", null);
exports.SesionesController = SesionesController = __decorate([
    (0, common_1.Controller)('sesiones'),
    __metadata("design:paramtypes", [typeof (_a = typeof sesiones_service_1.SesionesService !== "undefined" && sesiones_service_1.SesionesService) === "function" ? _a : Object])
], SesionesController);


/***/ }),

/***/ "./src/controllers/test.controller.ts":
/*!********************************************!*\
  !*** ./src/controllers/test.controller.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TestController = void 0;
const agentelog_service_1 = __webpack_require__(/*! src/services/agentelog.service */ "./src/services/agentelog.service.ts");
const userlog_service_1 = __webpack_require__(/*! src/services/userlog.service */ "./src/services/userlog.service.ts");
const agent_dto_1 = __webpack_require__(/*! src/dtos/agent.dto */ "./src/dtos/agent.dto.ts");
const userlog_dto_1 = __webpack_require__(/*! src/dtos/userlog.dto */ "./src/dtos/userlog.dto.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let TestController = exports.TestController = class TestController {
    constructor(ReportAgentelog, UserlogReport) {
        this.ReportAgentelog = ReportAgentelog;
        this.UserlogReport = UserlogReport;
    }
    async getUser(data) {
        try {
            console.log('Received data:', data);
            const { campaignIds, startDate, endDate, grupouser } = data;
            console.log('campaignIds:', campaignIds);
            console.log('startDate:', startDate);
            console.log('endDate:', endDate);
            const movistar = await this.UserlogReport.obtenerUserlog(startDate, endDate, campaignIds.join(','), grupouser.join(','));
            console.log('Agent log data:', movistar);
            return movistar.length > 0 ? movistar : { message: 'No data found' };
        }
        catch (error) {
            console.error('Error obteniendo el reporte de llamadas:', error);
            return { message: 'Error obteniendo los datos' };
        }
    }
    async getTest(data) {
        try {
            console.log('Received data:', data);
            const { campaignIds, startDate, endDate, grupouser } = data;
            console.log('campaignIds:', campaignIds);
            console.log('startDate:', startDate);
            console.log('endDate:', endDate);
            const movistar = await this.ReportAgentelog.obtenerReporteLlamadas(startDate, endDate, campaignIds.join(','), grupouser.join(','));
            console.log('Agent log data:', movistar);
            return movistar.length > 0 ? movistar : { message: 'No data found' };
        }
        catch (error) {
            console.error('Error obteniendo el reporte de llamadas:', error);
            return { message: 'Error obteniendo los datos' };
        }
    }
};
__decorate([
    (0, common_1.Post)('usertlog'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener el reporte de llamadas' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof userlog_dto_1.userDTO !== "undefined" && userlog_dto_1.userDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)('agentlog'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener el reporte de llamadas' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof agent_dto_1.agentDTO !== "undefined" && agent_dto_1.agentDTO) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "getTest", null);
exports.TestController = TestController = __decorate([
    (0, common_1.Controller)('test'),
    (0, swagger_1.ApiTags)('test'),
    __metadata("design:paramtypes", [typeof (_a = typeof agentelog_service_1.ReporteLlamadasService !== "undefined" && agentelog_service_1.ReporteLlamadasService) === "function" ? _a : Object, typeof (_b = typeof userlog_service_1.UserLogService !== "undefined" && userlog_service_1.UserLogService) === "function" ? _b : Object])
], TestController);


/***/ }),

/***/ "./src/database/database.module.ts":
/*!*****************************************!*\
  !*** ./src/database/database.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const config_1 = __webpack_require__(/*! src/config/config */ "./src/config/config.ts");
let DatabaseModule = exports.DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: (configService) => {
                    return {
                        type: 'mysql',
                        host: configService.host,
                        port: parseInt(configService.port_db),
                        username: configService.user_name,
                        password: configService.password,
                        database: configService.database,
                        autoLoadEntities: true,
                        synchronize: false,
                    };
                },
                inject: [config_1.default.KEY],
            }),
        ],
    })
], DatabaseModule);


/***/ }),

/***/ "./src/documentacion.ts":
/*!******************************!*\
  !*** ./src/documentacion.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateDocumentacion = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
function generateDocumentacion(app) {
    const pdfMod = new swagger_1.DocumentBuilder()
        .setTitle('Exports')
        .setDescription('Exports')
        .setVersion(process.env.APP_VERSION)
        .build();
    const pdfDocument = swagger_1.SwaggerModule.createDocument(app, pdfMod, {
        include: [app_module_1.AppModule],
    });
    swagger_1.SwaggerModule.setup('docs/exports', app, pdfDocument);
}
exports.generateDocumentacion = generateDocumentacion;


/***/ }),

/***/ "./src/dtos/agent.dto.ts":
/*!*******************************!*\
  !*** ./src/dtos/agent.dto.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.agentDTO = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class agentDTO {
}
exports.agentDTO = agentDTO;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], agentDTO.prototype, "campaignIds", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], agentDTO.prototype, "grupouser", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], agentDTO.prototype, "startDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], agentDTO.prototype, "endDate", void 0);


/***/ }),

/***/ "./src/dtos/create-envio-masivo.dto.ts":
/*!*********************************************!*\
  !*** ./src/dtos/create-envio-masivo.dto.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnvioExcelRow = exports.CreateEnvioMasivoDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateEnvioMasivoDto {
}
exports.CreateEnvioMasivoDto = CreateEnvioMasivoDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateEnvioMasivoDto.prototype, "id_usuario", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateEnvioMasivoDto.prototype, "id_sesion", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEnvioMasivoDto.prototype, "celular_origen", void 0);
class EnvioExcelRow {
}
exports.EnvioExcelRow = EnvioExcelRow;


/***/ }),

/***/ "./src/dtos/excel.dto.ts":
/*!*******************************!*\
  !*** ./src/dtos/excel.dto.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExcelDto = exports.SchemaDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class SchemaDto {
}
exports.SchemaDto = SchemaDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SchemaDto.prototype, "column", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", Object)
], SchemaDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], SchemaDto.prototype, "width", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], SchemaDto.prototype, "format", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SchemaDto.prototype, "value", void 0);
class ExcelDto {
}
exports.ExcelDto = ExcelDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SchemaDto),
    (0, swagger_1.ApiProperty)({ type: [SchemaDto] }),
    __metadata("design:type", Array)
], ExcelDto.prototype, "schema", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => Object),
    (0, swagger_1.ApiProperty)({ type: [Object] }),
    __metadata("design:type", Array)
], ExcelDto.prototype, "data", void 0);


/***/ }),

/***/ "./src/dtos/userlog.dto.ts":
/*!*********************************!*\
  !*** ./src/dtos/userlog.dto.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userDTO = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class userDTO {
}
exports.userDTO = userDTO;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], userDTO.prototype, "campaignIds", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], userDTO.prototype, "grupouser", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], userDTO.prototype, "startDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], userDTO.prototype, "endDate", void 0);


/***/ }),

/***/ "./src/entities/agente_log.entity.ts":
/*!*******************************************!*\
  !*** ./src/entities/agente_log.entity.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReporteLlamadasResult = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let ReporteLlamadasResult = exports.ReporteLlamadasResult = class ReporteLlamadasResult {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ReporteLlamadasResult.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ReporteLlamadasResult.prototype, "llamadas", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ReporteLlamadasResult.prototype, "cd", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ReporteLlamadasResult.prototype, "pdp", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "percentConv", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "tiempoLogueo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "wait", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "percentWait", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "talk", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "percentTalk", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "acw", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "percentAcw", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "pausa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "percentPausa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "deadCall", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "percentDeadCall", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "avgTalk", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "avgAcw", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "avgWait", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "undefined", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "andial", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "break", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "capa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "gesM", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "lagged", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "login", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "nxdial", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "omni", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "rrhh", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "soop", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteLlamadasResult.prototype, "sshh", void 0);
exports.ReporteLlamadasResult = ReporteLlamadasResult = __decorate([
    (0, typeorm_1.Entity)('ReporteLlamadasResult')
], ReporteLlamadasResult);


/***/ }),

/***/ "./src/entities/envio-detalle.entity.ts":
/*!**********************************************!*\
  !*** ./src/entities/envio-detalle.entity.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnvioDetalle = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const envio_masivo_cabecera_entity_1 = __webpack_require__(/*! ./envio-masivo-cabecera.entity */ "./src/entities/envio-masivo-cabecera.entity.ts");
const respuesta_mensaje_entity_1 = __webpack_require__(/*! ./respuesta-mensaje.entity */ "./src/entities/respuesta-mensaje.entity.ts");
let EnvioDetalle = exports.EnvioDetalle = class EnvioDetalle {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EnvioDetalle.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], EnvioDetalle.prototype, "id_envio_masivo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EnvioDetalle.prototype, "numero_destino", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], EnvioDetalle.prototype, "mensaje", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'pendiente' }),
    __metadata("design:type", String)
], EnvioDetalle.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], EnvioDetalle.prototype, "fecha_envio", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => envio_masivo_cabecera_entity_1.EnvioMasivoCabecera, envioMasivo => envioMasivo.enviosDetalle),
    (0, typeorm_1.JoinColumn)({ name: 'id_envio_masivo' }),
    __metadata("design:type", typeof (_b = typeof envio_masivo_cabecera_entity_1.EnvioMasivoCabecera !== "undefined" && envio_masivo_cabecera_entity_1.EnvioMasivoCabecera) === "function" ? _b : Object)
], EnvioDetalle.prototype, "envioMasivo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => respuesta_mensaje_entity_1.RespuestaMensaje, respuesta => respuesta.envioDetalle),
    __metadata("design:type", Array)
], EnvioDetalle.prototype, "respuestas", void 0);
exports.EnvioDetalle = EnvioDetalle = __decorate([
    (0, typeorm_1.Entity)('envios_detalle')
], EnvioDetalle);


/***/ }),

/***/ "./src/entities/envio-masivo-cabecera.entity.ts":
/*!******************************************************!*\
  !*** ./src/entities/envio-masivo-cabecera.entity.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnvioMasivoCabecera = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const envio_detalle_entity_1 = __webpack_require__(/*! ./envio-detalle.entity */ "./src/entities/envio-detalle.entity.ts");
let EnvioMasivoCabecera = exports.EnvioMasivoCabecera = class EnvioMasivoCabecera {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EnvioMasivoCabecera.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], EnvioMasivoCabecera.prototype, "id_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EnvioMasivoCabecera.prototype, "celular_origen", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], EnvioMasivoCabecera.prototype, "archivo_origen", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], EnvioMasivoCabecera.prototype, "fecha_envio", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], EnvioMasivoCabecera.prototype, "cantidad_mensajes", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'en proceso' }),
    __metadata("design:type", String)
], EnvioMasivoCabecera.prototype, "estado_general", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => envio_detalle_entity_1.EnvioDetalle, envioDetalle => envioDetalle.envioMasivo),
    __metadata("design:type", Array)
], EnvioMasivoCabecera.prototype, "enviosDetalle", void 0);
exports.EnvioMasivoCabecera = EnvioMasivoCabecera = __decorate([
    (0, typeorm_1.Entity)('envios_masivos_cabecera')
], EnvioMasivoCabecera);


/***/ }),

/***/ "./src/entities/envios_masivos.entity.ts":
/*!***********************************************!*\
  !*** ./src/entities/envios_masivos.entity.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnvioMasivo = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const numeros_masivos_entity_1 = __webpack_require__(/*! ./numeros_masivos.entity */ "./src/entities/numeros_masivos.entity.ts");
let EnvioMasivo = exports.EnvioMasivo = class EnvioMasivo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EnvioMasivo.prototype, "id_envio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], EnvioMasivo.prototype, "id_sesion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EnvioMasivo.prototype, "archivo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EnvioMasivo.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], EnvioMasivo.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => numeros_masivos_entity_1.NumeroMasivo, numero => numero.id_envio),
    __metadata("design:type", Array)
], EnvioMasivo.prototype, "numeros", void 0);
exports.EnvioMasivo = EnvioMasivo = __decorate([
    (0, typeorm_1.Entity)('envios_masivos')
], EnvioMasivo);


/***/ }),

/***/ "./src/entities/numeros_masivos.entity.ts":
/*!************************************************!*\
  !*** ./src/entities/numeros_masivos.entity.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NumeroMasivo = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const envios_masivos_entity_1 = __webpack_require__(/*! ./envios_masivos.entity */ "./src/entities/envios_masivos.entity.ts");
let NumeroMasivo = exports.NumeroMasivo = class NumeroMasivo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], NumeroMasivo.prototype, "id_numero", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => envios_masivos_entity_1.EnvioMasivo, envio => envio.numeros),
    __metadata("design:type", typeof (_a = typeof envios_masivos_entity_1.EnvioMasivo !== "undefined" && envios_masivos_entity_1.EnvioMasivo) === "function" ? _a : Object)
], NumeroMasivo.prototype, "id_envio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NumeroMasivo.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NumeroMasivo.prototype, "mensaje", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NumeroMasivo.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NumeroMasivo.prototype, "whatsapp_message_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], NumeroMasivo.prototype, "has_response", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], NumeroMasivo.prototype, "last_response_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], NumeroMasivo.prototype, "fecha", void 0);
exports.NumeroMasivo = NumeroMasivo = __decorate([
    (0, typeorm_1.Entity)('numeros_masivos')
], NumeroMasivo);


/***/ }),

/***/ "./src/entities/respuesta-mensaje.entity.ts":
/*!**************************************************!*\
  !*** ./src/entities/respuesta-mensaje.entity.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RespuestaMensaje = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const envio_detalle_entity_1 = __webpack_require__(/*! ./envio-detalle.entity */ "./src/entities/envio-detalle.entity.ts");
let RespuestaMensaje = exports.RespuestaMensaje = class RespuestaMensaje {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RespuestaMensaje.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RespuestaMensaje.prototype, "id_envio_detalle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RespuestaMensaje.prototype, "numero_origen", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], RespuestaMensaje.prototype, "mensaje_respuesta", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], RespuestaMensaje.prototype, "fecha_respuesta", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => envio_detalle_entity_1.EnvioDetalle, envioDetalle => envioDetalle.respuestas),
    (0, typeorm_1.JoinColumn)({ name: 'id_envio_detalle' }),
    __metadata("design:type", typeof (_b = typeof envio_detalle_entity_1.EnvioDetalle !== "undefined" && envio_detalle_entity_1.EnvioDetalle) === "function" ? _b : Object)
], RespuestaMensaje.prototype, "envioDetalle", void 0);
exports.RespuestaMensaje = RespuestaMensaje = __decorate([
    (0, typeorm_1.Entity)('respuestas_mensajes')
], RespuestaMensaje);


/***/ }),

/***/ "./src/entities/sesion.entity.ts":
/*!***************************************!*\
  !*** ./src/entities/sesion.entity.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sesion = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Sesion = exports.Sesion = class Sesion {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_sesion' }),
    __metadata("design:type", Number)
], Sesion.prototype, "idSesion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre_sesion', length: 100 }),
    __metadata("design:type", String)
], Sesion.prototype, "nombreSesion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'numero_telefono', length: 20 }),
    __metadata("design:type", String)
], Sesion.prototype, "numeroTelefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'token_sesion', type: 'text', nullable: true }),
    __metadata("design:type", String)
], Sesion.prototype, "tokenSesion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'qr_token', type: 'text', nullable: true }),
    __metadata("design:type", String)
], Sesion.prototype, "qrToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_creacion', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Sesion.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_ultima_actividad', type: 'datetime', nullable: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Sesion.prototype, "fechaUltimaActividad", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'estado',
        type: 'enum',
        enum: ['activa', 'inactiva', 'expirada'],
        default: 'activa',
    }),
    __metadata("design:type", String)
], Sesion.prototype, "estado", void 0);
exports.Sesion = Sesion = __decorate([
    (0, typeorm_1.Entity)('sesiones')
], Sesion);


/***/ }),

/***/ "./src/entities/sesiones_whatsapp.entity.ts":
/*!**************************************************!*\
  !*** ./src/entities/sesiones_whatsapp.entity.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SesionWhatsapp = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let SesionWhatsapp = exports.SesionWhatsapp = class SesionWhatsapp {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SesionWhatsapp.prototype, "id_sesion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SesionWhatsapp.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SesionWhatsapp.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], SesionWhatsapp.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], SesionWhatsapp.prototype, "updated_at", void 0);
exports.SesionWhatsapp = SesionWhatsapp = __decorate([
    (0, typeorm_1.Entity)('sesiones_whatsapp')
], SesionWhatsapp);


/***/ }),

/***/ "./src/entities/user_log.entity.ts":
/*!*****************************************!*\
  !*** ./src/entities/user_log.entity.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReporteXusuarios = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let ReporteXusuarios = exports.ReporteXusuarios = class ReporteXusuarios {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ReporteXusuarios.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteXusuarios.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteXusuarios.prototype, "identificador", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteXusuarios.prototype, "campania", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteXusuarios.prototype, "accesos", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteXusuarios.prototype, "expulsado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteXusuarios.prototype, "inicio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteXusuarios.prototype, "fin", void 0);
exports.ReporteXusuarios = ReporteXusuarios = __decorate([
    (0, typeorm_1.Entity)('ReporteXusuarios')
], ReporteXusuarios);


/***/ }),

/***/ "./src/services/agentelog.service.ts":
/*!*******************************************!*\
  !*** ./src/services/agentelog.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReporteLlamadasService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const agente_log_entity_1 = __webpack_require__(/*! src/entities/agente_log.entity */ "./src/entities/agente_log.entity.ts");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
let ReporteLlamadasService = exports.ReporteLlamadasService = class ReporteLlamadasService {
    constructor(reporteLlamadasRepository) {
        this.reporteLlamadasRepository = reporteLlamadasRepository;
    }
    async obtenerReporteLlamadas(fechaInicio, fechaFin, campaignIds, grupouser) {
        const result = await this.reporteLlamadasRepository.query(`CALL ReporteLlamadas('${fechaInicio}', '${fechaFin}', '${campaignIds}','${grupouser}')`);
        console.log('Resultado del procedimiento:', result);
        return result[0];
    }
};
exports.ReporteLlamadasService = ReporteLlamadasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(agente_log_entity_1.ReporteLlamadasResult)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], ReporteLlamadasService);


/***/ }),

/***/ "./src/services/agentelogexpor.service.ts":
/*!************************************************!*\
  !*** ./src/services/agentelogexpor.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReporteLlamadasServices = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const agente_log_entity_1 = __webpack_require__(/*! src/entities/agente_log.entity */ "./src/entities/agente_log.entity.ts");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
let ReporteLlamadasServices = exports.ReporteLlamadasServices = class ReporteLlamadasServices {
    constructor(reporteLlamadasRepository) {
        this.reporteLlamadasRepository = reporteLlamadasRepository;
    }
    async obtenerReporteLlamadas(fechaInicio, fechaFin, campaignIds, grupouser) {
        const result = await this.reporteLlamadasRepository.query(`CALL ReporteLlamadas('${fechaInicio}', '${fechaFin}', '${campaignIds}','${grupouser}')`);
        console.log('Resultado del procedimiento:', result);
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
            };
        });
        return reporteLlamadas;
    }
    convertToTime(time) {
        if (time && /^(\d{2}):(\d{2}):(\d{2})$/.test(time)) {
            const [hours, minutes, seconds] = time.split(':').map(Number);
            const date = new Date();
            date.setHours(hours, minutes, seconds, 0);
            return date.toISOString();
        }
        return time;
    }
};
exports.ReporteLlamadasServices = ReporteLlamadasServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(agente_log_entity_1.ReporteLlamadasResult)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], ReporteLlamadasServices);


/***/ }),

/***/ "./src/services/envios-masivos.service.ts":
/*!************************************************!*\
  !*** ./src/services/envios-masivos.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var EnviosMasivosService_1;
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnviosMasivosService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const envio_masivo_cabecera_entity_1 = __webpack_require__(/*! ../entities/envio-masivo-cabecera.entity */ "./src/entities/envio-masivo-cabecera.entity.ts");
const envio_detalle_entity_1 = __webpack_require__(/*! ../entities/envio-detalle.entity */ "./src/entities/envio-detalle.entity.ts");
const respuesta_mensaje_entity_1 = __webpack_require__(/*! ../entities/respuesta-mensaje.entity */ "./src/entities/respuesta-mensaje.entity.ts");
const xlsx = __webpack_require__(/*! xlsx */ "xlsx");
const sesiones_service_1 = __webpack_require__(/*! ./sesiones.service */ "./src/services/sesiones.service.ts");
let EnviosMasivosService = exports.EnviosMasivosService = EnviosMasivosService_1 = class EnviosMasivosService {
    constructor(envioMasivoCabeceraRepository, envioDetalleRepository, respuestaMensajeRepository, sesionesService) {
        this.envioMasivoCabeceraRepository = envioMasivoCabeceraRepository;
        this.envioDetalleRepository = envioDetalleRepository;
        this.respuestaMensajeRepository = respuestaMensajeRepository;
        this.sesionesService = sesionesService;
        this.logger = new common_1.Logger(EnviosMasivosService_1.name);
        this.configurarListenerMensajes();
    }
    configurarListenerMensajes() {
        const clientsMap = this.sesionesService.clients;
        if (clientsMap && clientsMap instanceof Map) {
            clientsMap.forEach((client, idSesion) => {
                this.configurarClientListener(client, idSesion);
            });
            const originalSet = clientsMap.set;
            clientsMap.set = (idSesion, client) => {
                this.configurarClientListener(client, idSesion);
                return originalSet.call(clientsMap, idSesion, client);
            };
        }
    }
    configurarClientListener(client, idSesion) {
        const listeners = client.listenerCount('message');
        if (listeners === 0) {
            client.on('message', async (message) => {
                await this.procesarMensajeEntrante(idSesion, message);
            });
        }
    }
    async procesarEnvioMasivoExcel(file, createEnvioMasivoDto) {
        try {
            const sesion = await this.sesionesService.obtenerSesionPorId(createEnvioMasivoDto.id_sesion);
            if (!sesion) {
                throw new common_1.NotFoundException(`Sesión con ID ${createEnvioMasivoDto.id_sesion} no encontrada`);
            }
            if (sesion.estado !== 'activa') {
                throw new common_1.BadRequestException(`La sesión ${sesion.idSesion} no está activa. Estado actual: ${sesion.estado}`);
            }
            const clientsMap = this.sesionesService.clients;
            const client = clientsMap.get(sesion.idSesion);
            if (!client) {
                throw new common_1.BadRequestException(`No hay un cliente WhatsApp activo para la sesión ${sesion.idSesion}`);
            }
            let data;
            try {
                const workbook = xlsx.read(file.buffer, { type: 'buffer' });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const headers = Object.keys(worksheet)
                    .filter(key => key.match(/[A-Z]1/))
                    .map(key => ({ columna: key, valor: worksheet[key]?.v }));
                this.logger.debug(`Encabezados detectados: ${JSON.stringify(headers)}`);
                const rawData = xlsx.utils.sheet_to_json(worksheet);
                data = rawData.map(row => {
                    const numero = this.obtenerValorColumna(row, ['numero', 'número', 'number', 'celular', 'telefono']);
                    const mensaje = this.obtenerValorColumna(row, ['mensaje', 'message', 'texto', 'contenido']);
                    return {
                        numero: numero ? this.formatearNumero(numero.toString().trim()) : null,
                        mensaje: mensaje ? mensaje.toString().trim() : null
                    };
                }).filter(row => row.numero && row.mensaje);
                this.logger.log(`Datos procesados: ${data.length} filas válidas`);
            }
            catch (error) {
                throw new common_1.BadRequestException(`Error al leer el archivo Excel: ${error.message}`);
            }
            if (!data || data.length === 0) {
                throw new common_1.BadRequestException('El archivo no contiene datos válidos. Requiere columnas con: ' +
                    'números (ej: "numero", "celular") y mensajes (ej: "mensaje", "texto")');
            }
            const envioMasivo = new envio_masivo_cabecera_entity_1.EnvioMasivoCabecera();
            envioMasivo.id_usuario = createEnvioMasivoDto.id_usuario;
            envioMasivo.celular_origen = createEnvioMasivoDto.celular_origen;
            envioMasivo.archivo_origen = file.originalname;
            envioMasivo.fecha_envio = new Date();
            envioMasivo.cantidad_mensajes = data.length;
            envioMasivo.estado_general = 'en_proceso';
            const envioMasivoGuardado = await this.envioMasivoCabeceraRepository.save(envioMasivo);
            let enviadosExitosos = 0;
            const errores = [];
            for (const [index, row] of data.entries()) {
                try {
                    if (!row.numero || !row.mensaje) {
                        this.logger.warn(`Fila ${index + 1} ignorada - Datos incompletos`);
                        continue;
                    }
                    const envioDetalle = new envio_detalle_entity_1.EnvioDetalle();
                    envioDetalle.id_envio_masivo = envioMasivoGuardado.id;
                    envioDetalle.numero_destino = row.numero;
                    envioDetalle.mensaje = row.mensaje;
                    envioDetalle.fecha_envio = new Date();
                    envioDetalle.estado = 'pendiente';
                    const detalleGuardado = await this.envioDetalleRepository.save(envioDetalle);
                    await client.sendMessage(`${row.numero}@c.us`, row.mensaje);
                    detalleGuardado.estado = 'enviado';
                    await this.envioDetalleRepository.save(detalleGuardado);
                    enviadosExitosos++;
                }
                catch (error) {
                    const errorMsg = `Fila ${index + 1} | Error: ${error.message}`;
                    this.logger.error(errorMsg);
                    errores.push(errorMsg);
                }
            }
            envioMasivoGuardado.estado_general = 'completado';
            envioMasivoGuardado.cantidad_mensajes = enviadosExitosos;
            if (errores.length > 0) {
                this.logger.warn(`Envío completado con ${errores.length} errores`);
            }
            return this.envioMasivoCabeceraRepository.save(envioMasivoGuardado);
        }
        catch (error) {
            this.logger.error(`Error en procesarEnvioMasivoExcel: ${error.stack}`);
            throw new common_1.BadRequestException(error.response?.message ||
                error.message ||
                'Error al procesar el envío masivo');
        }
    }
    obtenerValorColumna(row, posiblesNombres) {
        const key = Object.keys(row).find(k => posiblesNombres.some(name => k.toLowerCase() === name.toLowerCase()));
        return key ? row[key] : null;
    }
    formatearNumero(numero) {
        let numeroLimpio = numero.replace(/[\s-]+/g, '');
        if (!numeroLimpio.startsWith('51') && !numeroLimpio.startsWith('+') && !numeroLimpio.startsWith('00')) {
            numeroLimpio = '51' + numeroLimpio;
        }
        return numeroLimpio.startsWith('+') ? numeroLimpio.substring(1) : numeroLimpio;
    }
    async procesarMensajeEntrante(idSesion, message) {
        try {
            const numeroOrigen = message.from.split('@')[0];
            const envioExistente = await this.envioDetalleRepository.findOne({
                where: { numero_destino: numeroOrigen }
            });
            if (!envioExistente) {
                this.logger.warn(`[Sesión ${idSesion}] Mensaje ignorado de número no autorizado: ${numeroOrigen}`);
                return;
            }
            const respuesta = new respuesta_mensaje_entity_1.RespuestaMensaje();
            respuesta.id_envio_detalle = envioExistente.id;
            respuesta.numero_origen = numeroOrigen;
            respuesta.mensaje_respuesta = message.body;
            respuesta.fecha_respuesta = new Date();
            await this.respuestaMensajeRepository.save(respuesta);
            this.logger.log(`[Sesión ${idSesion}] Respuesta registrada del número: ${numeroOrigen}`);
        }
        catch (error) {
            this.logger.error(`[Sesión ${idSesion}] Error al procesar mensaje entrante: ${error.message}`);
        }
    }
    async obtenerTodosEnviosMasivos() {
        return this.envioMasivoCabeceraRepository.find({
            relations: ['enviosDetalle'],
        });
    }
    async obtenerEnvioMasivo(id) {
        const envio = await this.envioMasivoCabeceraRepository.findOne({
            where: { id },
            relations: ['enviosDetalle'],
        });
        if (!envio) {
            throw new common_1.NotFoundException(`Envío masivo con ID ${id} no encontrado`);
        }
        return envio;
    }
    async obtenerRespuestas(numeroDestino) {
        const envioDetalle = await this.envioDetalleRepository.findOne({
            where: { numero_destino: numeroDestino },
        });
        if (!envioDetalle) {
            throw new common_1.NotFoundException(`No se encontraron envíos para el número ${numeroDestino}`);
        }
        return this.respuestaMensajeRepository.find({
            where: { id_envio_detalle: envioDetalle.id },
            order: { fecha_respuesta: 'ASC' },
        });
    }
};
exports.EnviosMasivosService = EnviosMasivosService = EnviosMasivosService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(envio_masivo_cabecera_entity_1.EnvioMasivoCabecera)),
    __param(1, (0, typeorm_1.InjectRepository)(envio_detalle_entity_1.EnvioDetalle)),
    __param(2, (0, typeorm_1.InjectRepository)(respuesta_mensaje_entity_1.RespuestaMensaje)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof sesiones_service_1.SesionesService !== "undefined" && sesiones_service_1.SesionesService) === "function" ? _d : Object])
], EnviosMasivosService);


/***/ }),

/***/ "./src/services/sesiones.service.ts":
/*!******************************************!*\
  !*** ./src/services/sesiones.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SesionesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const sesion_entity_1 = __webpack_require__(/*! ../entities/sesion.entity */ "./src/entities/sesion.entity.ts");
const whatsapp_web_js_1 = __webpack_require__(/*! whatsapp-web.js */ "whatsapp-web.js");
const crypto = __webpack_require__(/*! crypto */ "crypto");
let SesionesService = exports.SesionesService = class SesionesService {
    constructor(sesionRepository) {
        this.sesionRepository = sesionRepository;
        this.clients = new Map();
        this.qrCodes = new Map();
    }
    async crearSesion(nombreSesion, numeroTelefono) {
        const qrToken = crypto.randomBytes(32).toString('hex');
        const sesion = this.sesionRepository.create({
            nombreSesion,
            numeroTelefono,
            qrToken,
        });
        const savedSesion = await this.sesionRepository.save(sesion);
        const qrCode = await this.iniciarClienteWhatsApp(savedSesion.idSesion);
        return {
            idSesion: savedSesion.idSesion,
            qrToken,
            qrCode,
        };
    }
    iniciarClienteWhatsApp(idSesion) {
        return new Promise((resolve) => {
            const client = new whatsapp_web_js_1.Client({
                authStrategy: new whatsapp_web_js_1.LocalAuth({ clientId: `sesion_${idSesion}` }),
                puppeteer: {
                    headless: true,
                    args: ['--no-sandbox', '--disable-setuid-sandbox'],
                },
            });
            client.on('qr', (qr) => {
                console.log(`\n===== QR PARA SESIÓN ${idSesion} =====`);
                console.log(qr);
                console.log('=====================================\n');
                this.qrCodes.set(idSesion, qr);
                resolve(qr);
            });
            client.on('ready', async () => {
                console.log(`✅ Cliente ${idSesion} está listo y conectado!`);
                await this.actualizarEstadoSesion(idSesion, 'activa');
                this.qrCodes.delete(idSesion);
            });
            client.on('disconnected', async () => {
                console.log(`⚠️ Cliente ${idSesion} desconectado`);
                await this.actualizarEstadoSesion(idSesion, 'inactiva');
                this.qrCodes.delete(idSesion);
            });
            client.initialize();
            this.clients.set(idSesion, client);
        });
    }
    async obtenerQrToken(idSesion) {
        const sesion = await this.sesionRepository.findOne({ where: { idSesion } });
        if (!sesion)
            return { qrToken: null };
        const qrCode = this.qrCodes.get(idSesion);
        return {
            qrToken: sesion.qrToken,
            qrCode: qrCode || undefined
        };
    }
    async obtenerTodasSesiones() {
        return this.sesionRepository.find();
    }
    async obtenerSesionPorId(idSesion) {
        return this.sesionRepository.findOne({ where: { idSesion } });
    }
    async actualizarEstadoSesion(idSesion, estado) {
        await this.sesionRepository.update(idSesion, {
            estado,
            fechaUltimaActividad: new Date(),
        });
    }
};
exports.SesionesService = SesionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sesion_entity_1.Sesion)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], SesionesService);


/***/ }),

/***/ "./src/services/userlog.service.ts":
/*!*****************************************!*\
  !*** ./src/services/userlog.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserLogService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_log_entity_1 = __webpack_require__(/*! src/entities/user_log.entity */ "./src/entities/user_log.entity.ts");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
let UserLogService = exports.UserLogService = class UserLogService {
    constructor(reporteLlamadasRepository) {
        this.reporteLlamadasRepository = reporteLlamadasRepository;
    }
    async obtenerUserlog(fechaInicio, fechaFin, campaignIds, grupouser) {
        const result = await this.reporteLlamadasRepository.query(`CALL ReporteXusuarios('${fechaInicio}', '${fechaFin}', '${campaignIds}','${grupouser}')`);
        console.log('Resultado del procedimiento:', result);
        return result[0];
    }
};
exports.UserLogService = UserLogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_log_entity_1.ReporteXusuarios)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], UserLogService);


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Headuserlog = exports.Headagentelog = exports.convertRows = void 0;
const dayjs_1 = __webpack_require__(/*! dayjs */ "dayjs");
const convertRows = (schema) => {
    const newData = [];
    schema.forEach(e => {
        const dd = {};
        for (const key in e) {
            if (Object.prototype.hasOwnProperty.call(e, key)) {
                if (key === 'value') {
                    dd[key] = d => d[e[key]];
                    continue;
                }
                if (key === 'type') {
                    switch (e[key]) {
                        case 'string':
                            dd[key] = String;
                            break;
                        case 'date':
                            dd[key] = Date;
                            dd['time'] = d => {
                                const date = (0, dayjs_1.default)(d);
                                return `${date.hour()}:${date.minute()}:${date.second()}`;
                            };
                            break;
                        case 'number':
                            dd[key] = Number;
                            break;
                        case 'boolean':
                            dd[key] = Boolean;
                            break;
                        default:
                            dd[key] = String;
                            break;
                    }
                }
                else {
                    dd[key] = e[key];
                }
            }
        }
        newData.push(dd);
    });
    return newData;
};
exports.convertRows = convertRows;
exports.Headagentelog = [
    {
        column: 'LLAMADAS',
        type: 'number',
        format: '',
        value: 'LLAMADAS',
        width: 10,
    },
    {
        column: 'CD',
        type: 'number',
        format: '',
        value: 'CD',
        width: 10,
    },
    {
        column: 'PDP',
        type: 'number',
        format: '',
        value: 'PDP',
        width: 10,
    },
    {
        column: '%CONV',
        type: 'string',
        format: '',
        value: '%CONV',
        width: 12,
    },
    {
        column: 'TIEMPO LOGUEO',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'Tiempo_Logueo',
        width: 15,
    },
    {
        column: 'Wait',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'Wait',
        width: 12,
    },
    {
        column: '%WAIT',
        type: 'string',
        format: '',
        value: '%Wait',
        width: 12,
    },
    {
        column: 'Talk',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'Talk',
        width: 12,
    },
    {
        column: '%Talk',
        type: 'string',
        format: '',
        value: '%Talk',
        width: 12,
    },
    {
        column: 'ACW',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'ACW',
        width: 12,
    },
    {
        column: '%ACW',
        type: 'string',
        format: '',
        value: '%ACW',
        width: 12,
    },
    {
        column: 'Pausa',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'Pausa',
        width: 12,
    },
    {
        column: '%Pausa',
        type: 'string',
        format: '',
        value: '%Pausa',
        width: 12,
    },
    {
        column: 'Dead_Call',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'Dead_Call',
        width: 12,
    },
    {
        column: '%Dead_Call',
        type: 'string',
        format: '',
        value: '%Dead_Call',
        width: 12,
    },
    {
        column: 'Avg_Talk',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'Avg_Talk',
        width: 12,
    },
    {
        column: 'Avg_ACW',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'Avg_ACW',
        width: 12,
    },
    {
        column: 'Avg_Wait',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'Avg_Wait',
        width: 12,
    },
    {
        column: 'undefined',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'undefined',
        width: 12,
    },
    {
        column: 'ANDIAL',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'ANDIAL',
        width: 12,
    },
    {
        column: 'BREAK',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'BREAK',
        width: 12,
    },
    {
        column: 'CAPA',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'CAPA',
        width: 12,
    },
    {
        column: 'GES_M',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'GES_M',
        width: 12,
    },
    {
        column: 'LAGGED',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'LAGGED',
        width: 12,
    },
    {
        column: 'LOGIN',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'LOGIN',
        width: 12,
    },
    {
        column: 'NXDIAL',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'NXDIAL',
        width: 12,
    },
    {
        column: 'OMNI',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'OMNI',
        width: 12,
    },
    {
        column: 'RRHH',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'RRHH',
        width: 12,
    },
    {
        column: 'SOPO',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'SOPO',
        width: 12,
    },
    {
        column: 'SSHH',
        type: 'time',
        format: 'HH:mm:ss',
        value: 'SSHH',
        width: 12,
    },
];
exports.Headuserlog = [
    {
        column: 'USUARIO',
        type: 'string',
        format: '',
        value: 'USUARIO',
        width: 50,
    },
    {
        column: 'IDENTIFICADOR',
        type: 'string',
        format: '',
        value: 'IDENTIFICADOR',
        width: 15,
    },
    {
        column: 'CAMPAÑA',
        type: 'string',
        format: '',
        value: 'CAMPAÑA',
        width: 9,
    },
    {
        column: 'Accesos',
        type: 'string',
        format: '',
        value: 'Accesos',
        width: 3,
    },
    {
        column: 'Expulsado',
        type: 'string',
        format: '',
        value: 'Expulsado',
        width: 3,
    },
    {
        column: 'Inicio_Logueo',
        type: 'string',
        format: '',
        value: 'Inicio_Logueo',
        width: 10,
    },
    {
        column: 'FIN_Logueo',
        type: 'string',
        format: '',
        value: 'FIN_Logueo',
        width: 10,
    },
];


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/event-emitter":
/*!****************************************!*\
  !*** external "@nestjs/event-emitter" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/event-emitter");

/***/ }),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ "exceljs":
/*!**************************!*\
  !*** external "exceljs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("exceljs");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "jszip":
/*!************************!*\
  !*** external "jszip" ***!
  \************************/
/***/ ((module) => {

module.exports = require("jszip");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "whatsapp-web.js":
/*!**********************************!*\
  !*** external "whatsapp-web.js" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("whatsapp-web.js");

/***/ }),

/***/ "write-excel-file/node":
/*!****************************************!*\
  !*** external "write-excel-file/node" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("write-excel-file/node");

/***/ }),

/***/ "xlsx":
/*!***********************!*\
  !*** external "xlsx" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("xlsx");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const documentacion_1 = __webpack_require__(/*! ./documentacion */ "./src/documentacion.ts");
const bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const logger = new common_1.Logger('Main');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: false,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)));
    app.enableCors();
    (0, documentacion_1.generateDocumentacion)(app);
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    await app.listen(process.env.PORT || 3000, () => {
        logger.log(`Server running on port ${process.env.PORT || 3000}`);
        logger.log(`Modo ${process.env.NODE_ENV ? process.env.NODE_ENV : 'Desarrollo'}`);
        logger.log(__dirname);
    });
}
bootstrap();

})();

/******/ })()
;