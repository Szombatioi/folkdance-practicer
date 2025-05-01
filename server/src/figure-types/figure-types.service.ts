import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateFigureTypeDto } from "./dto/create-figure-type.dto";
import { UpdateFigureTypeDto } from "./dto/update-figure-type.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { FigureType } from "./entities/figure-type.entity";
import { Repository } from "typeorm";

@Injectable()
export class FigureTypesService {
  constructor(
    @InjectRepository(FigureType)
    private readonly figureTypeRepository: Repository<FigureType>
  ) {}

  async create(createFigureTypeDto: CreateFigureTypeDto) {
    return await this.figureTypeRepository.save(
      await this.figureTypeRepository.create(createFigureTypeDto)
    );
  }

  async findAll() {
    return await this.figureTypeRepository.find({
      relations: {
        figures: true,
      },
    });
  }

  async findOne(id: number): Promise<FigureType> {
    const ft = await this.figureTypeRepository.findOne({
      where: { id },
      relations: {
        figures: true,
      },
    });

    if (!ft)
      throw new NotFoundException(`Did not found figure type with id #${id}`);

    return ft;
  }

  async update(id: number, updateFigureTypeDto: UpdateFigureTypeDto) {
    const ft = await this.findOne(id);
    Object.assign(ft, updateFigureTypeDto);
    return this.figureTypeRepository.save(ft);
  }

  //TODO
  remove(id: number) {
    return `This action removes a #${id} figureType`;
  }
}
