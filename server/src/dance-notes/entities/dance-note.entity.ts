import { Dance } from "src/dance/entities/dance.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DanceNote {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Dance, (d) => d.notes)
    dance: Dance;
}
