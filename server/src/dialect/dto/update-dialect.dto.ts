import { PartialType } from '@nestjs/mapped-types';
import { CreateDialectDto } from './create-dialect.dto';

export class UpdateDialectDto extends PartialType(CreateDialectDto) {}
