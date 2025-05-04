import { Dance } from "src/dance/entities/dance.entity";
import { Figure } from "src/figures/entities/figure.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DanceNote {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Dance, (d) => d.notes)
    dance: Dance;

    @OneToMany(() => Figure, (f) => f.danceNote)
    figures: Figure[];


    @CreateDateColumn()
    createdAt: Date;
}
