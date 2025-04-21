import { Region } from "src/region/entities/region.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

//shared among dances and music
@Entity()
export class Dialect {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string; //pl. Tiszai, Erdélyi

    //One Dialect has many Regions
    @OneToMany(() => Region, (r) => r.dialect)
    regions: Region[];
}