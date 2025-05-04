import { Lyric } from "./lyric";

export interface Music{
    id: number;
    title: string;
    lyrics: Lyric[];
}