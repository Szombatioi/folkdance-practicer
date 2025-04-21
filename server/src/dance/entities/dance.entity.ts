import { Area } from "src/area/entities/area.entity";
import { DanceNote } from "src/dance-notes/entities/dance-note.entity";
import { DanceType } from "src/dance-types/entities/dance-type.entity";
import { Land } from "src/land/entities/land.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dance {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string; //pl. Kalotaszegi legényes, Szatmári verbunk

    @ManyToOne(() => Area, (a) => a.dances)
    area: Area; //pl. Méra, Visa, stb., de lehet simán 1 is vagy 0 is

    @ManyToOne(() => DanceType, (dt) => dt.dances)
    danceType: DanceType;

    @OneToMany(() => DanceNote, (dn) => dn.dance)
    notes: DanceNote;
}
