import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMusicSourceDto } from './dto/create-music-source.dto';
import { UpdateMusicSourceDto } from './dto/update-music-source.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MusicSource } from './entities/music-source.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MusicSourceService {
  constructor(
    @InjectRepository(MusicSource)
    private readonly musicSourceRepository: Repository<MusicSource>
  ){}

  async create(createMusicSourceDto: CreateMusicSourceDto) {
    return await this.musicSourceRepository.save(
      await this.musicSourceRepository.create(createMusicSourceDto)
    );
  }

  async findAll() {
    return await this.musicSourceRepository.find(); //TODO maybe relations?
  }

  async findOne(id: number) {
    const ms = await this.musicSourceRepository.findOne({
      where: {id} //TODO maybe relations?
    });

    if(!ms) throw new NotFoundException(`Music source did not found with id #${id}`);

    return ms;
  }

  async update(id: number, updateMusicSourceDto: UpdateMusicSourceDto) {
    const ms = await this.findOne(id);
    Object.assign(ms, updateMusicSourceDto);
    return await this.musicSourceRepository.save(ms);
  }

  //TODO
  async remove(id: number) {

  }
}
