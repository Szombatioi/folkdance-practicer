import { PartialType } from '@nestjs/mapped-types';
import { CreateDanceDto } from './create-dance.dto';

export class UpdateDanceDto {
    name: string | null;
    areaId: number | null;
    landId: number | null;
    danceTypeId: number | null;
}
