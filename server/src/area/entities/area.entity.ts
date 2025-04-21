import { Land } from "src/land/entities/land.entity";
import { Region } from "src/region/entities/region.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

//Tájegységek: Mezőség, Kalotaszeg, ...
@Entity()
export class Area {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Region, (r) => r.areas)
    region: Region;

   @OneToMany(() => Land, (l) => l.area)
   lands: Land[]; 

}
