import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ReporteXusuarios')
export class ReporteXusuarios{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
     user: string;

     @Column()
     identificador: string;

     @Column()
     campania: string;

     @Column()
     accesos: string;

     @Column()
     expulsado: string;

     @Column()
     inicio: string;

     @Column()
     fin: string;


}
