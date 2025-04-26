import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLandDto } from './dto/create-land.dto';
import { UpdateLandDto } from './dto/update-land.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Land } from './entities/land.entity';
import { Repository } from 'typeorm';
import { Area } from 'src/area/entities/area.entity';

@Injectable()
export class LandService {
  constructor(
    @InjectRepository(Land)
    private readonly landRepository: Repository<Land>,

    @InjectRepository(Area)
    private readonly areaRepository: Repository<Area>
  ){}

  async create(data: CreateLandDto) {
    const {areaId, ...landData} = data;
    const area = await this.areaRepository.findOne({where: {id: areaId}});

    if(!area) throw new NotFoundException("Area not found with id #" + areaId.toString());

    const land = await this.landRepository.create(landData);
    land.area = area;
    await this.landRepository.save(land);
  }

  async findAll() {
    return await this.landRepository.find({relations: ["area"]});
  }

  async findOne(id: number) {
    const land = await this.landRepository.findOne({where: {id}, relations: ["area"]});

    if(!land) throw new NotFoundException("Land not found with id #" + id.toString());

    return land;
  }

  async update(id: number, newLandDto: UpdateLandDto) {
    try{
      const land = await this.findOne(id);
      const {newAreaId, ...newLand} = newLandDto;
      Object.assign(land, newLand)

      if(newAreaId !== 0) {
        const area = await this.areaRepository.findOne({where: {id: newAreaId}});
        if(!area) throw new NotFoundException('New area not found with id #' + newAreaId.toString());
        land.area = area;
      }

      await this.landRepository.save(land);
    } catch(e){
      throw e;
    }
  }

  // remove(id: number) {
  //   return `This action removes a #${id} land`;
  // }
}
