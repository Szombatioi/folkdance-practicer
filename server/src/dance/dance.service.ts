import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDanceDto } from './dto/create-dance.dto';
import { UpdateDanceDto } from './dto/update-dance.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dance } from './entities/dance.entity';
import { AreaService } from 'src/area/area.service';
import { DanceTypesService } from 'src/dance-types/dance-types.service';

@Injectable()
export class DanceService {
  constructor(
    @InjectRepository(Dance)
    private readonly danceRepository: Repository<Dance>,

    private readonly areaService: AreaService,
    private readonly danceTypeServiece: DanceTypesService
  ){}

  private readonly relations = ['area', 'danceType', 'notes'];

  async create(dataDto: CreateDanceDto) {
    try {
      const {danceTypeId, areaId, landId, ...data} = dataDto;

      const area = await this.areaService.findOne(areaId);
      const land = landId ? area.lands.find(l => l.id == landId && l.area.id == areaId) ?? null : null;
      const dance = await this.danceRepository.create(data);
      const dt = await this.danceTypeServiece.findOne(danceTypeId);
      dance.area = area;
      if(land) dance.land = land;
      if(dt) dance.danceType = dt;
      await this.danceRepository.save(dance);
    } catch (e) {
      throw e;
    }
  }

  async findAll() {
    return await this.danceRepository.find({relations: this.relations});
  }

  async findOne(id: number) {
    const dance = await this.danceRepository.findOne({where: {id}, relations: this.relations})

    if(!dance) throw new NotFoundException("Dance not found with id #" + id.toString());

    return dance;
  }

  async update(id: number, newDto: UpdateDanceDto) {
    try {
      const {areaId, landId, danceTypeId, ...data} = newDto;
      
      const dance = await this.findOne(id);
      Object.assign(dance, data);

      if(areaId) dance.area = await this.areaService.findOne(areaId);
      // if(landId)
      if(danceTypeId) dance.danceType = await this.danceTypeServiece.findOne(danceTypeId);

      await this.danceRepository.save(dance);
    } catch (e) {
      throw e;
    }
  }

  //TODO will we need this?
  // remove(id: number) {
  //   return `This action removes a #${id} dance`;
  // }
}
