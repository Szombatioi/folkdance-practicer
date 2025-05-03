import { Injectable } from '@nestjs/common';
import { CreateMusicSourceDto } from './dto/create-music-source.dto';
import { UpdateMusicSourceDto } from './dto/update-music-source.dto';

@Injectable()
export class MusicSourceService {
  create(createMusicSourceDto: CreateMusicSourceDto) {
    return 'This action adds a new musicSource';
  }

  findAll() {
    return `This action returns all musicSource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} musicSource`;
  }

  update(id: number, updateMusicSourceDto: UpdateMusicSourceDto) {
    return `This action updates a #${id} musicSource`;
  }

  remove(id: number) {
    return `This action removes a #${id} musicSource`;
  }
}
