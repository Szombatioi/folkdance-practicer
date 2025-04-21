import { PartialType } from '@nestjs/mapped-types';
import { CreateDanceNoteDto } from './create-dance-note.dto';

export class UpdateDanceNoteDto extends PartialType(CreateDanceNoteDto) {}
