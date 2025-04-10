import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { EnvioMasivo } from './envios_masivos.entity';


@Entity('numeros_masivos')
export class NumeroMasivo {
  @PrimaryGeneratedColumn()
  id_numero: number;

  @ManyToOne(() => EnvioMasivo, envio => envio.numeros)
  id_envio: EnvioMasivo;

  @Column()
  numero: string;

  @Column()
  mensaje: string;

  @Column()
  estado: string;

  @Column()
  whatsapp_message_id: string;

  @Column()
  has_response: boolean;

  @Column({ nullable: true })
  last_response_date: Date;

  @Column()
  fecha: Date;
}