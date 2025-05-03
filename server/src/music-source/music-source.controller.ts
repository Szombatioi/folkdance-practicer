import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MusicSourceService } from './music-source.service';
import { CreateMusicSourceDto } from './dto/create-music-source.dto';
import { UpdateMusicSourceDto } from './dto/update-music-source.dto';

@Controller('music-source')
export class MusicSourceController {
  constructor(private readonly musicSourceService: MusicSourceService) {}

  @Post()
  create(@Body() createMusicSourceDto: CreateMusicSourceDto) {
    return this.musicSourceService.create(createMusicSourceDto);
  }

  @Get()
  findAll() {
    return this.musicSourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musicSourceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMusicSourceDto: UpdateMusicSourceDto) {
    return this.musicSourceService.update(+id, updateMusicSourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musicSourceService.remove(+id);
  }
}
