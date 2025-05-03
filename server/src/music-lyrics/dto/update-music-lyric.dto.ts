import { PartialType } from '@nestjs/mapped-types';
import { CreateMusicLyricDto } from './create-music-lyric.dto';

export class UpdateMusicLyricDto extends PartialType(CreateMusicLyricDto) {}
