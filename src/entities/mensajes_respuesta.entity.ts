import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { NumeroMasivo } from './numeros_masivos.entity';

@Entity('mensajes_respuesta')
export class MensajesRespuesta {
  @PrimaryGeneratedColumn()
  id_mensaje: number;

  @ManyToOne(() => NumeroMasivo, numero => numero.mensaje)
  id_numero: NumeroMasivo;

  @Column()
  numero_origen: string;

  @Column()
  mensaje: string;

  @Column()
  fecha: Date;

  @Column()
  whatsapp_message_id: string;
}