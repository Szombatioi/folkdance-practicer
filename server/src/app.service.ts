import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dialect } from './dialect/entities/dialect.entity';
import { Region } from './region/entities/region.entity';
import { Area } from './area/entities/area.entity';
import { Land } from './land/entities/land.entity';
import { LandStructure } from './dto/land-structure';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Dialect)
    private readonly dialectRepository: Repository<Dialect>,

    @InjectRepository(Region)
    private readonly regionRepository: Repository<Region>,

    @InjectRepository(Area)
    private readonly areaRepository: Repository<Area>,

    @InjectRepository(Land)
    private readonly landRepository: Repository<Land>
  ){}

  async getStructureByLand(id: number){
    const land = await this.landRepository.findOne({where: {id}, relations: ['area']});
    if(!land) throw new NotFoundException("Land not found with id #" + id.toString());
    
    const area = await this.areaRepository.findOne({where: {id: land.area.id}, relations: ['region']});
    if(!area) throw new NotFoundException("Area not found with id #" + land.area.id.toString()); //should not happen

    const region = await this.regionRepository.findOne({where: {id: area?.region.id}, relations: ['dialect']});
    if(!region) throw new NotFoundException("Region not found with id #" + area.region.id.toString());

    const dialect = await this.dialectRepository.findOne({where: {id: region?.dialect.id}});
    if(!dialect) throw new NotFoundException("Dialect not found with id #" + region.dialect.id.toString());

    console.log("Found everything");
    return new LandStructure(dialect.name, region.name, area.name, land.name);
  }

  async getStructureByArea(id: number){
    const area = await this.areaRepository.findOne({where: {id}, relations: ['region']});
    if(!area) throw new NotFoundException("Area not found with id #" + id.toString());

    const region = await this.regionRepository.findOne({where: {id: area?.region.id}, relations: ['dialect']});
    if(!region) throw new NotFoundException("Region not found with id #" + area.region.id.toString());

    const dialect = await this.dialectRepository.findOne({where: {id: region?.dialect.id}});
    if(!dialect) throw new NotFoundException("Dialect not found with id #" + region.dialect.id.toString());

    return new LandStructure(dialect.name, region.name, area.name, null);
  }
}
