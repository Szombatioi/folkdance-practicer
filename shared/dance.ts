import { Area } from "./area";
import { DanceType } from "./dance-type";
import { Land } from "./land";

export interface Dance {
    id: number;
    name: string;
    land: Land;
    area: Area;
    danceType: DanceType;
}