import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateDanceNoteDto } from "./dto/create-dance-note.dto";
import { UpdateDanceNoteDto } from "./dto/update-dance-note.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { DanceNote } from "./entities/dance-note.entity";
import { Repository } from "typeorm";
import { DanceService } from "src/dance/dance.service";

@Injectable()
export class DanceNotesService {
  constructor(
    @InjectRepository(DanceNote)
    private readonly danceNoteRepository: Repository<DanceNote>,

    private readonly danceService: DanceService
  ) {}
  async create(createDanceNoteDto: CreateDanceNoteDto) {
    const { danceId, ...data } = createDanceNoteDto;

    const dn = await this.danceNoteRepository.create(data);
    const dance = await this.danceService.findOne(danceId);

    dn.dance = dance;
    return await this.danceNoteRepository.save(dn);
  }

  async findAll() {
    return await this.danceNoteRepository.find({
      relations: {
        dance: true,
        figures: true,
      },
    });
  }

  async findOne(id: number) {
    const dn = await this.danceNoteRepository.findOne({where: {id},
      relations: {
        dance: {
          area: true
        },
        figures: {
          figureType: true
        },
      },
    });

    if(!dn) throw new NotFoundException(`Did not found dance note with id #${id}`);

    return dn;
  }

  async findAllByDance(danceId: number){
    return await this.danceNoteRepository.find({
      where: {dance: {id: danceId}},
      relations: {
        dance: true,
        figures: true,
      },
    });
  }

  //TODO: add/remove figure function

  async update(id: number, updateDanceNoteDto: UpdateDanceNoteDto) {
    const dn = await this.findOne(id);
    const {danceId, ...data} = updateDanceNoteDto;
    Object.assign(dn, data);

    if(danceId) dn.dance = await this.danceService.findOne(danceId);

    await this.danceNoteRepository.save(dn);
  }

  //TODO
  // remove(id: number) {
  //   return `This action removes a #${id} danceNote`;
  // }
}
