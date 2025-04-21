import { Area } from "src/area/entities/area.entity";
import { Dialect } from "src/dialect/entities/dialect.entity";
import { Land } from "src/land/entities/land.entity";
import { Region } from "src/region/entities/region.entity";

export class LandStructure{
    constructor(
        public dialect: string,
        public region: string,
        public area: string,
        public land: string | null
    ){}
}