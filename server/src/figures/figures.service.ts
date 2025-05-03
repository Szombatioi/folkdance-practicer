import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateFigureDto } from "./dto/create-figure.dto";
import { UpdateFigureDto } from "./dto/update-figure.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Figure } from "./entities/figure.entity";
import { Repository } from "typeorm";
import { DanceNotesService } from "src/dance-notes/dance-notes.service";
import { FigureTypesService } from "src/figure-types/figure-types.service";
import { UpdateRegionDto } from "src/region/dto/update-region.dto";

@Injectable()
export class FiguresService {
  constructor(
    @InjectRepository(Figure)
    private readonly figureRepository: Repository<Figure>,

    private readonly danceNoteService: DanceNotesService,
    private readonly figureTypeService: FigureTypesService
  ) {}

  async create(createFigureDto: CreateFigureDto) {
    const { danceNoteId, figureTypeId, ...data } = createFigureDto;
    const ft = await this.figureRepository.create(data);

    ft.danceNote = await this.danceNoteService.findOne(danceNoteId);
    ft.figureType = await this.figureTypeService.findOne(figureTypeId);

    return await this.figureRepository.save(ft);
  }

  async findAll() {
    return await this.figureRepository.find({
      relations: {
        danceNote: true,
        figureType: true,
      },
    });
  }

  async findOne(id: number) {
    const figure = await this.figureRepository.findOne({
      where: { id },
      relations: {
        danceNote: {
          dance: {
            area: true,
            danceType: {
              danceCategory: true
            }
          }
        },
        figureType: true,
      },
    });

    if (!figure)
      throw new NotFoundException(`Did not found figure type with id #${id}`);

    return figure;
  }

  async update(id: number, updateFigureDto: UpdateFigureDto) {
    const {figureTypeId, danceNoteId, ...data} = updateFigureDto;
    
    const figure = await this.findOne(id);
    Object.assign(figure, data);

    if(figureTypeId) figure.figureType = await this.figureTypeService.findOne(figureTypeId);
    if(danceNoteId) figure.danceNote = await this.danceNoteService.findOne(danceNoteId);

    return await this.figureRepository.save(figure);
  }

  //TODO
  remove(id: number) {
    return `This action removes a #${id} figure`;
  }
}
