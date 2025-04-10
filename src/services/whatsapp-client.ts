import EventEmitter from 'events';
import path from 'path';
import { Client, LocalAuth } from 'whatsapp-web.js';

interface WhatsAppMessage {
  from: string;
  body: string;
  id: string;
}

export class WhatsAppClient extends EventEmitter {
  on(eventName: string | symbol, listener: (...args: any[]) => void): this {
    super.on(eventName, listener);
    return this;
  }
  once(eventName: string | symbol, listener: (...args: any[]) => void): this {
    super.once(eventName, listener);
    return this;
  }
  private client: Client;
  private qrReceived = false;
  logger: any;

  constructor(private readonly phoneNumber: string) {
    super();
    const validClientId = this.generateValidId(phoneNumber);
    this.client = new Client({
      authStrategy: new LocalAuth({
        clientId: validClientId,
        dataPath: path.join(__dirname, '../../whatsapp_sessions')
      }),
      puppeteer: {
        headless: true,
        executablePath: process.env.CHROME_PATH || undefined,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-gpu'
        ]
      },
      takeoverOnConflict: true
    });
    this.setupEventHandlers(); // Solo llamar a este método
  }

  private generateValidId(phoneNumber: string): string {
    return phoneNumber.replace(/\D/g, '').substring(0, 20);
  }

  private setupEventHandlers() {
    this.client.on('qr', (qr) => {
      this.logger.debug(`QR recibido: ${qr}`);
      this.qrReceived = true;
      this.emit('qr', qr);
    });

    this.client.on('authenticated', (session) => {
      this.emit('authenticated', session);
    });

    this.client.on('ready', () => {
      this.emit('ready', 'Client is ready!');
    });

    this.client.on('message', (msg) => {
      if (!msg.fromMe && msg.from !== 'status@broadcast') {
        this.emit('message', {
          from: msg.from.replace(/@c.us/g, ''),
          body: msg.body,
          id: msg.id.id
        } as WhatsAppMessage);
      }
    });

    this.client.on('error', (err) => {
      this.emit('error', err);
    });

    this.client.on('disconnected', (reason) => {
      this.emit('disconnected', reason);
    });
  }
  // Removed the custom emit method to avoid conflict with EventEmitter's emit method.

  public async initialize(): Promise<void> {
    try {
      if (!this.client.pupPage) {
        await this.client.initialize();
      }
    } catch (error) {
      this.logger.error('Error al inicializar cliente:', error);
      throw error;
    }
  }

  public async sendMessage(to: string, message: string): Promise<{ id: string }> {
    try {
      const sentMessage = await this.client.sendMessage(`${to}@c.us`, message);
      return { id: sentMessage.id.id };
    } catch (error) {
      this.logger.error(`Error enviando mensaje a ${to}:`, error);
      throw error;
    }
  }

  public async destroy(): Promise<void> {
    try {
      if (this.client.pupBrowser) {
        await this.client.destroy();
      }
    } catch (error) {
      this.logger.error('Error al destruir cliente:', error);
      throw error;
    }
  }
}