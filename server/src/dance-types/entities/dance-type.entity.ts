import { DanceCategory } from "src/dance-categories/entities/dance-category.entity";
import { Dance } from "src/dance/entities/dance.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DanceType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string; //pl. páros tánc, férfitánc, csingerálás, körtánc, karikázó

    @OneToMany(() => Dance, (d) => d.danceType)
    dances: Dance[];

    @ManyToOne(() => DanceCategory, (dc) => dc.danceTypes)
    danceCategory: DanceCategory;
}
