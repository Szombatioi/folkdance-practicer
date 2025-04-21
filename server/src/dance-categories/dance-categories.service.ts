import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDanceCategoryDto } from './dto/create-dance-category.dto';
import { UpdateDanceCategoryDto } from './dto/update-dance-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DanceCategory } from './entities/dance-category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DanceCategoriesService {
  constructor(
    @InjectRepository(DanceCategory)
    private readonly danceCategoryRepository: Repository<DanceCategory>
  ){}

  async create(data: CreateDanceCategoryDto): Promise<any> {
    await this.danceCategoryRepository.save(
      await this.danceCategoryRepository.create(data)
    );
  }

  async findAll() {
    return await this.danceCategoryRepository.find({relations: ['danceTypes']});
  }

  async findOne(id: number) {
    const dc = await this.danceCategoryRepository.findOne({where: {id}, relations: ['danceTypes']});

    if(!dc) throw new NotFoundException("Dance category not found with id #" + id.toString());

    return dc;
  }

  async update(id: number, newDto: UpdateDanceCategoryDto) {
    try{
      const dc = await this.findOne(id);
      Object.assign(dc, newDto);
      await this.danceCategoryRepository.save(dc);
    } catch(e) {
      throw e;
    }

  }

  //TODO: will we need this?
  // remove(id: number) {
  //   return `This action removes a #${id} danceCategory`;
  // }
}
