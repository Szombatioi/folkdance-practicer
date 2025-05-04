import { Area } from "src/area/entities/area.entity";
import { MusicLyric } from "src/music-lyrics/entities/music-lyric.entity";
import { MusicSource } from "src/music-source/entities/music-source.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Music {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToMany(() => MusicSource, (ms) => ms.musics)
    @JoinTable()
    musicSources: MusicSource[];

    @OneToMany(() => MusicLyric, (ml) => ml.music)
    lyrics: MusicLyric[];

    @ManyToOne(() => Area, (a) => a.musics)
    area: Area;

    //TODO: tempo?
    //type?
}
