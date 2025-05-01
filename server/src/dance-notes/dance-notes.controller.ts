import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DanceNotesService } from './dance-notes.service';
import { CreateDanceNoteDto } from './dto/create-dance-note.dto';
import { UpdateDanceNoteDto } from './dto/update-dance-note.dto';

@Controller('dance-notes')
export class DanceNotesController {
  constructor(private readonly danceNotesService: DanceNotesService) {}

  @Post()
  create(@Body() createDanceNoteDto: CreateDanceNoteDto) {
    return this.danceNotesService.create(createDanceNoteDto);
  }

  @Get()
  findAll() {
    return this.danceNotesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.danceNotesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDanceNoteDto: UpdateDanceNoteDto) {
    return this.danceNotesService.update(+id, updateDanceNoteDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.danceNotesService.remove(+id);
  // }
}
