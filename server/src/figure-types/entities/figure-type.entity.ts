import { Figure } from "src/figures/entities/figure.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FigureType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Figure, (f) => f.figureType)
  figures: Figure[];
}
