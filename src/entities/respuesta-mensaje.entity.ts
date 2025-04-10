import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { EnvioDetalle } from './envio-detalle.entity';

@Entity('respuestas_mensajes')
export class RespuestaMensaje {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_envio_detalle: number;

  @Column()
  numero_origen: string;

  @Column('text')
  mensaje_respuesta: string;

  @Column()
  fecha_respuesta: Date;

  @ManyToOne(() => EnvioDetalle, envioDetalle => envioDetalle.respuestas)
  @JoinColumn({ name: 'id_envio_detalle' })
  envioDetalle: EnvioDetalle;
}