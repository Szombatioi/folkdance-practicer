import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDanceTypeDto } from './dto/create-dance-type.dto';
import { UpdateDanceTypeDto } from './dto/update-dance-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DanceType } from './entities/dance-type.entity';
import { DanceCategoriesService } from 'src/dance-categories/dance-categories.service';

@Injectable()
export class DanceTypesService {
  constructor(
    @InjectRepository(DanceType)
    private readonly danceTypesRepository: Repository<DanceType>,

    private readonly danceCategoriesService: DanceCategoriesService
  ){}

  async create(data: CreateDanceTypeDto, dcId: number) {
    try{
      const dc = await this.danceCategoriesService.findOne(dcId);
      const dt = await this.danceTypesRepository.create(data);
      dt.danceCategory = dc;
      this.danceTypesRepository.save(dt);
    } catch(e){
      throw e;
    }

  }

  async findAll() {
    return await this.danceTypesRepository.find({relations: [
      'dances', 'danceCategory'
    ]});
  }

  async findOne(id: number) {
    const dt = await this.danceTypesRepository.findOne({where: {id}, relations: [
      'dances', 'danceCategory'
    ]});

    if(!dt) throw new NotFoundException("Dance type not found with id #" + id.toString());

    return dt;
  }

  async update(id: number, newDto: UpdateDanceTypeDto) {
    try{
      const dt = await this.findOne(id);
      Object.assign(dt, newDto);
      this.danceTypesRepository.save(dt);
    } catch(e){
      throw e;
    }
  }

  //TODO will we need this?
  // remove(id: number) {
  //   return `This action removes a #${id} danceType`;
  // }
}
