import { Region } from "./region";

export interface Dialect{
    id: number;
    name: string;
    regions: Region[];
}