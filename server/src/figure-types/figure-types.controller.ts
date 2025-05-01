import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FigureTypesService } from './figure-types.service';
import { CreateFigureTypeDto } from './dto/create-figure-type.dto';
import { UpdateFigureTypeDto } from './dto/update-figure-type.dto';

@Controller('figure-types')
export class FigureTypesController {
  constructor(private readonly figureTypesService: FigureTypesService) {}

  @Post()
  create(@Body() createFigureTypeDto: CreateFigureTypeDto) {
    return this.figureTypesService.create(createFigureTypeDto);
  }

  @Get()
  findAll() {
    return this.figureTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.figureTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFigureTypeDto: UpdateFigureTypeDto) {
    return this.figureTypesService.update(+id, updateFigureTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.figureTypesService.remove(+id);
  }
}
