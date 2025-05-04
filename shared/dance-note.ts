import {Dance} from "./dance"
import { Figure } from "./figure";

export interface DanceNote{
    id: number;
    name: string;
    dance: Dance;
    figures: Figure[];

    createdAt: Date;
}