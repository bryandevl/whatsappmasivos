import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ReporteLlamadasResult')
export class ReporteLlamadasResult {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: string;

  @Column()
  llamadas: number;

  
  @Column()
  cd: number;

  @Column()
  pdp: number;

  @Column()
  percentConv: string;

  @Column()
  tiempoLogueo: string;

  @Column()
  wait: string;

  @Column()
  percentWait: string;

  @Column()
  talk: string;

  @Column()
  percentTalk: string;

  @Column()
  acw: string;

  @Column()
  percentAcw: string;

  @Column()
  pausa: string;

  @Column()
  percentPausa: string;

  @Column()
  deadCall: string;

  @Column()
  percentDeadCall: string;

  @Column()
  avgTalk: string;

  @Column()
  avgAcw: string;

  @Column()
  avgWait: string;

  @Column()
  undefined: string;

  @Column()
  andial: string;

  @Column()
  break: string;

  @Column()
  capa: string;

  @Column()
  gesM: string;

  @Column()
  lagged: string;

  @Column()
  login: string;

  @Column()
  nxdial: string;

  @Column()
  omni: string;

  @Column()
  rrhh: string;

  @Column()
  soop: string;

  @Column()
  sshh: string;
}
