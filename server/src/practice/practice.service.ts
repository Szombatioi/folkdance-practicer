import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePracticeDto } from "./dto/create-practice.dto";
import { UpdatePracticeDto } from "./dto/update-practice.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Practice } from "./entities/practice.entity";
import { Repository } from "typeorm";
import { DanceService } from "src/dance/dance.service";

@Injectable()
export class PracticeService {
  constructor(
    @InjectRepository(Practice)
    private readonly practiceRepository: Repository<Practice>,

    private readonly danceService: DanceService
  ) {}

  async create(createPracticeDto: CreatePracticeDto) {
    const { danceId, ...data } = createPracticeDto;

    const practice = await this.practiceRepository.create(data);
    const dance = await this.danceService.findOne(danceId);

    practice.dance = dance;

    return await this.practiceRepository.save(practice);
  }

  async findAll() {
    return await this.practiceRepository.find({
      relations: { dance: { area: true } },
    });
  }

  async findOne(id: number) {
    const practice = await this.practiceRepository.findOne({
      where: { id },
      relations: ["dance"],
    });

    if (!practice)
      throw new NotFoundException("Practice not found with id #" + id.toString());

    return practice;
  }

  async update(id: number, updatePracticeDto: UpdatePracticeDto) {
    const practice = await this.findOne(id);
    practice.lastPractice = new Date();
    if (updatePracticeDto.danceId) {
      const dance = await this.danceService.findOne(updatePracticeDto.danceId);
      practice.dance = dance;
    }

    return await this.practiceRepository.save(practice);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} practice`;
  // }
}
