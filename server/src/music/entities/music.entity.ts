import { MusicLyric } from "src/music-lyrics/entities/music-lyric.entity";
import { MusicSource } from "src/music-source/entities/music-source.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Music {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToMany(() => MusicSource, (ms) => ms.musics)
    musicSources: MusicSource[];

    @OneToMany(() => MusicLyric, (ml) => ml.music)
    lyrics: MusicLyric[];

    //TODO: tempo?
    //type?
}
