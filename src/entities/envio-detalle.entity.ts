import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { EnvioMasivoCabecera } from './envio-masivo-cabecera.entity';
import { RespuestaMensaje } from './respuesta-mensaje.entity'; // Asegúrate de que la ruta sea correcta

@Entity('envios_detalle')
export class EnvioDetalle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_envio_masivo: number;

  @Column()
  numero_destino: string;

  @Column('text')
  mensaje: string;

  @Column({ default: 'pendiente' })
  estado: string;

  @Column()
  fecha_envio: Date;

  @ManyToOne(() => EnvioMasivoCabecera, envioMasivo => envioMasivo.enviosDetalle)
  @JoinColumn({ name: 'id_envio_masivo' })
  envioMasivo: EnvioMasivoCabecera;

  @OneToMany(() => RespuestaMensaje, respuesta => respuesta.envioDetalle)
  respuestas: RespuestaMensaje[];
}