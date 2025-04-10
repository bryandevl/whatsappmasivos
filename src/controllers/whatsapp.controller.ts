import { Controller, Post, Body } from '@nestjs/common';

import { CreateEnvioDto   } from '../dtos/create-envio.dto';
import { WhatsAppService } from 'src/services/whatsapp.service';

@Controller('whatsapp')
export class WhatsAppController {
  constructor(private readonly whatsappService: WhatsAppService) {}

  @Post('scan-qr')
  async scanQr() {
    return this.whatsappService.scanQr();
  }

  @Post('send-massive')
  async sendMassive(@Body() createEnvioDto: CreateEnvioDto) {
    return this.whatsappService.sendMassiveMessages(createEnvioDto);
  }
}