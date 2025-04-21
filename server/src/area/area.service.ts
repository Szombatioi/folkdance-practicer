import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Area } from './entities/area.entity';
import { Repository } from 'typeorm';
import { Region } from 'src/region/entities/region.entity';
import { RegionService } from 'src/region/region.service';

@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(Area)
    private readonly areaRepository: Repository<Area>,
    @InjectRepository(Region)
    private readonly regionRepository: Repository<Region>
  ){}
  
  async create(data: CreateAreaDto, regionId: number) {
    
    const region = await this.regionRepository.findOne({where: {id: regionId}});

    if(!region) throw new NotFoundException("Region not found with id #"+regionId.toString());

    const area = await this.areaRepository.create(data);
    area.region = region;
    await this.areaRepository.save(area);
    
  }

  async findAll() {
    return await this.areaRepository.find({relations: ['region']});
  }

  async findOne(id: number) {
    const area = await this.areaRepository.findOne({where: {id}, relations: ['region']});

    if(!area) throw new NotFoundException("Area not found with id #" + id.toString());

    return area;
  }

  async update(id: number, newAreaDto: UpdateAreaDto) {
    try{
      const area = await this.findOne(id);
      Object.assign(area, newAreaDto);
      await this.areaRepository.save(area);
    } catch(e){
      throw e;
    }
  }

  // remove(id: number) {
  //   return `This action removes a #${id} area`;
  // }
}
