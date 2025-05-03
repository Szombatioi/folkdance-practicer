import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MusicLyricsService } from './music-lyrics.service';
import { CreateMusicLyricDto } from './dto/create-music-lyric.dto';
import { UpdateMusicLyricDto } from './dto/update-music-lyric.dto';

@Controller('music-lyrics')
export class MusicLyricsController {
  constructor(private readonly musicLyricsService: MusicLyricsService) {}

  @Post()
  create(@Body() createMusicLyricDto: CreateMusicLyricDto) {
    return this.musicLyricsService.create(createMusicLyricDto);
  }

  @Get()
  findAll() {
    return this.musicLyricsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musicLyricsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMusicLyricDto: UpdateMusicLyricDto) {
    return this.musicLyricsService.update(+id, updateMusicLyricDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musicLyricsService.remove(+id);
  }
}
