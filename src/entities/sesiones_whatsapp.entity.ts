import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { EnvioMasivo } from './envios_masivos.entity';

@Entity('sesiones_whatsapp')
export class SesionWhatsapp {
  @PrimaryGeneratedColumn()
  id_sesion: number;

  @Column()
  numero: string;

  @Column()
  estado: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}