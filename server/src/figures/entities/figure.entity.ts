import { DanceNote } from "src/dance-notes/entities/dance-note.entity";
import { FigureType } from "src/figure-types/entities/figure-type.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Figure {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => DanceNote, (dn) => dn.figures)
    danceNote: DanceNote;

    @ManyToOne(() => FigureType, (ft) => ft.figures)
    figureType: FigureType;


    //Todo:
    //Descriptions
    //{done} FigureType // pl. Bevonulások, Páros forgás lenyitás
}
