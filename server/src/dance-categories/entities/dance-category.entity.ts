import { DanceType } from "src/dance-types/entities/dance-type.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DanceCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @OneToMany(() => DanceType, (dt) => dt.danceCategory)
    danceTypes: DanceType;
}
