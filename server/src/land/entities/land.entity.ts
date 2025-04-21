import { Area } from "src/area/entities/area.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
