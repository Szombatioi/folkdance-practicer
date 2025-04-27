import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DanceTypesService } from './dance-types.service';
import { CreateDanceTypeDto } from './dto/create-dance-type.dto';
import { UpdateDanceTypeDto } from './dto/update-dance-type.dto';

@Controller('dance-types')
export class DanceTypesController {
  constructor(private readonly danceTypesService: DanceTypesService) {}

  @Post()
  create(@Body() createDanceTypeDto: CreateDanceTypeDto) {
    return this.danceTypesService.create(createDanceTypeDto);
  }

  @Get()
  findAll() {
    return this.danceTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.danceTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDanceTypeDto: UpdateDanceTypeDto) {
    return this.danceTypesService.update(+id, updateDanceTypeDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.danceTypesService.remove(+id);
  // }
}
