import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDanceDto } from './dto/create-dance.dto';
import { UpdateDanceDto } from './dto/update-dance.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dance } from './entities/dance.entity';
import { AreaService } from 'src/area/area.service';

@Injectable()
export class DanceService {
  constructor(
    @InjectRepository(Dance)
    private readonly danceRepository: Repository<Dance>,

    private readonly areaService: AreaService
  ){}

  private readonly relations = ['area', 'danceType', 'notes'];

  async create(data: CreateDanceDto, areaId: number) {
    try {
      const area = await this.areaService.findOne(areaId);
      const dance = await this.danceRepository.create(data);

      dance.area = area;
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
      const dance = await this.findOne(id);
      Object.assign(dance, newDto);
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
