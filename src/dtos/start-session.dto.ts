export class StartSessionDto {
    id_sesion: number;
    session_data: string;

    token: string;
    qr_expires?: Date;
  }