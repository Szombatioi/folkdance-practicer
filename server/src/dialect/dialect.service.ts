import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateDialectDto } from './dto/update-dialect.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dialect } from './entities/dialect.entity';
import { Repository } from 'typeorm';
import { Region } from 'src/region/entities/region.entity';
import { CreateDialectDto } from './dto/create-dialect.dto';


@Injectable()
export class DialectService {
  constructor(
    @InjectRepository(Dialect)
    private readonly dialectRepository: Repository<Dialect>,

    @InjectRepository(Region)
    private readonly regionRepository: Repository<Region>
  ) {}

  async create(data: CreateDialectDto): Promise<any> {
    await this.dialectRepository.save(
      await this.dialectRepository.create(data)
    );
  }

  async addRegion(id: number, rid: number){
    const dialect = await this.dialectRepository.findOne({ where: {id}, relations: ['areas']}); //todo load regions?

    if(dialect === null){
      throw new NotFoundException("Dialect not found");
    }

    const region = await this.regionRepository.findOne({where: {id: rid}});

    if(region === null){
      throw new NotFoundException("Region not found for dialect: " + dialect.name);
    }

    dialect.regions.push(region);
    await this.dialectRepository.save(dialect);
  }

  async removeRegion(){

  }

  async clearRegions(){

  }

  async findAll() {
    return await this.dialectRepository.find({relations: ['regions']});
  }

  async findOne(id: number) {
    const dialect = await this.dialectRepository.findOne({where: {id}, relations: ['regions']});
    if(dialect === null){
      throw new NotFoundException("Dialect not found with id #"+id.toString());
    }
    return dialect;
  }

  async update(id: number, newDialectDto: UpdateDialectDto) {
    try{
      let dialect = await this.findOne(id);
      Object.assign(dialect, newDialectDto);
      await this.dialectRepository.save(dialect);
    } catch(e){
      throw e;
    }
  }

  //TODO: will we need it?
  // remove(id: number) {
  // return `This action removes a #${id} dialect`;
  // }
}
