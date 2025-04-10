import { Controller, Post, Body } from '@nestjs/common';
import { SesionesService } from 'src/services/sesiones.service';

@Controller('sesiones')
export class SesionesController {
  constructor(private readonly sesionesService: SesionesService) {}

  @Post('generar-qr')
  async generarQrDesdeBody(
    @Body() body: { nombreSesion: string; numeroTelefono: string },
  ): Promise<{ idSesion: number, qrToken: string, qrCode?: string }> {
    const { nombreSesion, numeroTelefono } = body;

    const { idSesion, qrToken } = await this.sesionesService.crearSesion(nombreSesion, numeroTelefono);
    const { qrCode } = await this.sesionesService.obtenerQrToken(idSesion);

    return { idSesion, qrToken, qrCode };
  }
}
