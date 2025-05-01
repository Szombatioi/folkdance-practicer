import { Area } from "./area";
import { Land } from "./land";

export interface Dance {
    id: number;
    name: string;
    land: Land;
    area: Area;
}