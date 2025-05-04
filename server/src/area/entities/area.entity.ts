import { Dance } from "src/dance/entities/dance.entity";
import { Land } from "src/land/entities/land.entity";
import { Music } from "src/music/entities/music.entity";
import { Region } from "src/region/entities/region.entity";
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

//Tájegységek: Mezőség, Kalotaszeg, ...
@Entity()
export class Area {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Region, (r) => r.areas)
  region: Region;

  @OneToMany(() => Land, (l) => l.area)
  lands: Land[];

  @OneToMany(() => Dance, (d) => d.area)
  dances: Dance[];

  @OneToMany(() => Music, (m) => m.area)
  musics: Music[];
}
