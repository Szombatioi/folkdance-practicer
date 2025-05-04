import { PartialType } from '@nestjs/mapped-types';
import { CreateMusicDto } from './create-music.dto';

export class UpdateMusicDto extends PartialType(CreateMusicDto) {
    //note: MusicSourceIds and MusicLyricsIds store ID's that are newly added!

    delMusicSourceIds: number[];
    delMusicLyricIds: number[];
}
