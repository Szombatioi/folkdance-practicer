import { Injectable } from '@nestjs/common';
import { CreateMusicLyricDto } from './dto/create-music-lyric.dto';
import { UpdateMusicLyricDto } from './dto/update-music-lyric.dto';

@Injectable()
export class MusicLyricsService {
  create(createMusicLyricDto: CreateMusicLyricDto) {
    return 'This action adds a new musicLyric';
  }

  findAll() {
    return `This action returns all musicLyrics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} musicLyric`;
  }

  update(id: number, updateMusicLyricDto: UpdateMusicLyricDto) {
    return `This action updates a #${id} musicLyric`;
  }

  remove(id: number) {
    return `This action removes a #${id} musicLyric`;
  }
}
