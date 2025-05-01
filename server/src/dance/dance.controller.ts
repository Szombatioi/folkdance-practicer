import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DanceService } from './dance.service';
import { CreateDanceDto } from './dto/create-dance.dto';
import { UpdateDanceDto } from './dto/update-dance.dto';

@Controller('dance')
export class DanceController {
  constructor(private readonly danceService: DanceService) {}

  @Post()
  create(@Body() createDanceDto: CreateDanceDto) {
    return this.danceService.create(createDanceDto);
  }

  @Get()
  findAll() {
    return this.danceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.danceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDanceDto: UpdateDanceDto) {
    return this.danceService.update(+id, updateDanceDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.danceService.remove(+id);
  // }
}
