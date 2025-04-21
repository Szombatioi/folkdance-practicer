import { Land } from "src/land/entities/land.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dance {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string; //pl. Kalotaszegi legényes, Szatmári verbunk

    @Column()
    type: string; //TODO

    @ManyToMany(() => Land, (l) => l.dances)
    lands: Land[]; //pl. Méra, Visa, stb., de lehet simán 1 is vagy 0 is
}
