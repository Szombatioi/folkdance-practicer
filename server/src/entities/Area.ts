import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Region } from "./Region";
import { Dialect } from "./Dialect";

@Entity()
export class Area{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @OneToMany(() => Region, (region) => region.area)
    regions: Region[];

    @ManyToOne(() => Dialect, (dialect) => dialect.areas)
    dialect: Dialect;
}