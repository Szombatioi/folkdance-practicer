import { Dance } from "src/dance/entities/dance.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Practice {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    lastPractice: Date;

    //user

    @ManyToOne(() => Dance)
    dance: Dance;
}
