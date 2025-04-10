import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { SesionWhatsapp } from './sesiones_whatsapp.entity';
import { NumeroMasivo } from './numeros_masivos.entity';

@Entity('envios_masivos')
export class EnvioMasivo {

    @PrimaryGeneratedColumn()
    id_envio: number;
  
    @Column()
    id_sesion: number;
  
    @Column()
    archivo: string;
  
    @Column()
    estado: string;
  
    @Column()
    created_at: Date;
  
    @OneToMany(() => NumeroMasivo, numero => numero.id_envio)
    numeros: NumeroMasivo[];
  }