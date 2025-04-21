import { Area } from "src/area/entities/area.entity";
import { Dialect } from "src/dialect/entities/dialect.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Region {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    //One Dialect has many Regions
    @ManyToOne(() => Dialect, (dialect)=>dialect.regions)
    dialect: Dialect;

    @OneToMany(() => Area, (a) => a.region)
    areas: Area[];
}
