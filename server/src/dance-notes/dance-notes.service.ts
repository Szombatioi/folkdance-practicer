import { Injectable } from '@nestjs/common';
import { CreateDanceNoteDto } from './dto/create-dance-note.dto';
import { UpdateDanceNoteDto } from './dto/update-dance-note.dto';

@Injectable()
export class DanceNotesService {
  create(createDanceNoteDto: CreateDanceNoteDto) {
    return 'This action adds a new danceNote';
  }

  findAll() {
    return `This action returns all danceNotes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} danceNote`;
  }

  update(id: number, updateDanceNoteDto: UpdateDanceNoteDto) {
    return `This action updates a #${id} danceNote`;
  }

  remove(id: number) {
    return `This action removes a #${id} danceNote`;
  }
}
