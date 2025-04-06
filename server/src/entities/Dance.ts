import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Land } from "./Land";

@Entity()
export class Dance{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    type: string;
    
    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Land, (land) => land.dances)
    land: Land;
}