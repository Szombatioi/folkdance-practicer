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

  async create(data: CreateDanceTypeDto) {
    try{
      const {danceCategoryId, ...dtDto} = data;
      const dc = await this.danceCategoriesService.findOne(danceCategoryId);
      const dt = this.danceTypesRepository.create(dtDto);
      dt.danceCategory = dc;
      return await this.danceTypesRepository.save(dt);
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
    // eslint-disable-next-line no-useless-catch
    try{
      const dt = await this.findOne(id);
      
      const {newDanceCategoryId, ...data} = newDto;
      Object.assign(dt, data);

      const dc = await this.danceCategoriesService.findOne(newDanceCategoryId);
      dt.danceCategory = dc;

      return await this.danceTypesRepository.save(dt);
    } catch(e){
      throw e;
    }
  }

  //TODO will we need this?
  // remove(id: number) {
  //   return `This action removes a #${id} danceType`;
  // }
}
