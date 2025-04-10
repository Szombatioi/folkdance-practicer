import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Land } from "./Land";
import { Area } from "./Area";

@Entity()
export class Region{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @OneToMany(() => Land, (land) => land.region)
    lands: Land[];

    @ManyToOne(() => Area, (area) => area.regions)
    area: Area;
}