import { Area } from "src/area/entities/area.entity";
import { Dance } from "src/dance/entities/dance.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

//Falvak, települések: Magyarpalatka, Méra, Szatmár, Nagyecsed, Vajdaszentivány
@Entity()
export class Land {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Area, (a) => a.lands)
    area: Area;
}
