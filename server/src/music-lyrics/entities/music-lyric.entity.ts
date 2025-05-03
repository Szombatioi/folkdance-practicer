import { Music } from "src/music/entities/music.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MusicLyric {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @ManyToOne(() => Music, (m) => m.lyrics)
    music: Music;
}
