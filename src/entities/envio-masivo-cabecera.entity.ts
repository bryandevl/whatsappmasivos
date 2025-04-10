import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { EnvioDetalle   } from './envio-detalle.entity'; // Asegúrate de que la ruta sea correcta

@Entity('envios_masivos_cabecera')
export class EnvioMasivoCabecera {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_usuario: number;

  @Column()
  celular_origen: string;

  @Column({ nullable: true })
  archivo_origen: string;

  @Column()
  fecha_envio: Date;

  @Column({ default: 0 })
  cantidad_mensajes: number;

  @Column({ default: 'en proceso' })
  estado_general: string;

  @OneToMany(() => EnvioDetalle, envioDetalle => envioDetalle.envioMasivo)
  enviosDetalle: EnvioDetalle[];
}