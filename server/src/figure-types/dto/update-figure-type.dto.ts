import { PartialType } from '@nestjs/mapped-types';
import { CreateFigureTypeDto } from './create-figure-type.dto';

export class UpdateFigureTypeDto extends PartialType(CreateFigureTypeDto) {}
