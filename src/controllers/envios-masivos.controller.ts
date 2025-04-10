
import { 
  Controller, 
  Post, 
  Body, 
  UploadedFile, 
  UseInterceptors,
  Get,
  Param,
  ParseIntPipe
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { EnviosMasivosService } from '../services/envios-masivos.service';
import { CreateEnvioMasivoDto   } from '../dtos/create-envio-masivo.dto';

@Controller('envios-masivos')
export class EnviosMasivosController {
  constructor(private readonly enviosMasivosService: EnviosMasivosService) {}

  @Post('enviar')
  @UseInterceptors(FileInterceptor('archivo'))
  async enviarMasivo(
    @UploadedFile() file: Express.Multer.File,
    @Body() createEnvioMasivoDto: CreateEnvioMasivoDto,
  ) {
    return this.enviosMasivosService.procesarEnvioMasivoExcel(file, createEnvioMasivoDto);
  }

  @Get('obetner')
  async obtenerTodos() {
    return this.enviosMasivosService.obtenerTodosEnviosMasivos();
  }

  @Get(':id')
  async obtenerPorId(@Param('id', ParseIntPipe) id: number) {
    return this.enviosMasivosService.obtenerEnvioMasivo(id);
  }

  @Get('respuestas/:numero')
  async obtenerRespuestas(@Param('numero') numero: string) {
    return this.enviosMasivosService.obtenerRespuestas(numero);
  }
}