import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('sesiones')
export class Sesion {
  @PrimaryGeneratedColumn({ name: 'id_sesion' })
  idSesion: number;

  @Column({ name: 'nombre_sesion', length: 100 })
  nombreSesion: string;

  @Column({ name: 'numero_telefono', length: 20 })
  numeroTelefono: string;

  @Column({ name: 'token_sesion', type: 'text', nullable: true })
  tokenSesion: string;

  @Column({ name: 'qr_token', type: 'text', nullable: true })
  qrToken: string; // Nuevo campo para el token QR

  @Column({ name: 'fecha_creacion', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fechaCreacion: Date;

  @Column({ name: 'fecha_ultima_actividad', type: 'datetime', nullable: true })
  fechaUltimaActividad: Date;

  @Column({
    name: 'estado',
    type: 'enum',
    enum: ['activa', 'inactiva', 'expirada'],
    default: 'activa',
  })
  estado: string;
}