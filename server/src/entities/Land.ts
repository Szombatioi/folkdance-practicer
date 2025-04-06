import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Dance } from "./Dance";
import { Region } from "./Region";

@Entity()
export class Land{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    //region

    @OneToMany(() => Dance, (dance) => dance.land)
    dances: Dance[];

    @ManyToOne(() => Region, (region) => region.lands)
    region: Region;
}