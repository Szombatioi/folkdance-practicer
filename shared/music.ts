import { Area } from "./area";
import { Lyric } from "./lyric";
import { Source } from "./source";

export interface Music{
    id: number;
    title: string;
    lyrics: Lyric[];
    area: Area;
    musicSources: Source[];
}