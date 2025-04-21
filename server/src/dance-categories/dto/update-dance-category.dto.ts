import { PartialType } from '@nestjs/mapped-types';
import { CreateDanceCategoryDto } from './create-dance-category.dto';

export class UpdateDanceCategoryDto extends PartialType(CreateDanceCategoryDto) {}
