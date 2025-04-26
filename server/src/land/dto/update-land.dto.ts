import { PartialType } from '@nestjs/mapped-types';
import { CreateLandDto } from './create-land.dto';

export class UpdateLandDto /*extends PartialType(CreateLandDto)*/ {
    name: string;
    newAreaId: number = 0;
}
