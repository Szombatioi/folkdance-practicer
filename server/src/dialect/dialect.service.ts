import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateDialectDto } from './dto/update-dialect.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dialect } from './entities/dialect.entity';
import { Repository } from 'typeorm';
import { Region } from 'src/region/entities/region.entity';


@Injectable()
export class DialectService {
  constructor(
    @InjectRepository(Dialect)
    private readonly dialectRepository: Repository<Dialect>,

    @InjectRepository(Region)
    private readonly regionRepository: Repository<Region>
  ) {}

  async create(data: {name: string}): Promise<any> {
    await this.dialectRepository.create(data);
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

    dialect.regions.push(region!);
    await this.dialectRepository.save(dialect);
  }

  async removeRegion(){

  }

  async clearRegions(){

  }

  async findAll() {
    return await this.dialectRepository.find({relations: ['regions']});
  }

  findOne(id: number) {
    return `This action returns a #${id} dialect`;
  }

  update(id: number, updateDialectDto: UpdateDialectDto) {
    return `This action updates a #${id} dialect`;
  }

  remove(id: number) {
    return `This action removes a #${id} dialect`;
  }
}
