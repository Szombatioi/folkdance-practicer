import { Music } from "src/music/entities/music.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MusicSource {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    link: string;

    @ManyToMany(() => Music, (m) => m.musicSources)
    musics: Music[];

    //type? Like spotify, yt, etc.
}
