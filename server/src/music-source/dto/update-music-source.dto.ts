import { PartialType } from '@nestjs/mapped-types';
import { CreateMusicSourceDto } from './create-music-source.dto';

export class UpdateMusicSourceDto extends PartialType(CreateMusicSourceDto) {}
