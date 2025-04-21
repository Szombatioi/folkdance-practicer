import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Region } from './entities/region.entity';
import { Repository } from 'typeorm';
import { Dialect } from 'src/dialect/entities/dialect.entity';

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(Region)
    private readonly regionsRepository: Repository<Region>,

    @InjectRepository(Dialect)
    private readonly dialectRepository: Repository<Dialect>,
  ){}

  async create(data: {name: string}, dialectId: number) {
    //add region to dialect
    const dialect = await this.dialectRepository.findOne({where: {id: dialectId}});

    if(dialect === null){
      throw new NotFoundException("Dialect not found.");
    }
    
    const region = await this.regionsRepository.create(data);

    region.dialect = dialect;

    await this.regionsRepository.save(region);
  }

  async findAll() {
    return await this.regionsRepository.find({relations: ['dialect', 'areas']});
  }

  findOne(id: number) {
    return `This action returns a #${id} region`;
  }

  update(id: number, updateRegionDto: UpdateRegionDto) {
    return `This action updates a #${id} region`;
  }

  remove(id: number) {
    return `This action removes a #${id} region`;
  }
}
