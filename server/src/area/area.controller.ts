import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AreaService } from './area.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Post()
  create(@Body() createAreaDto: CreateAreaDto) {
    const { regionId, ...areaData } = createAreaDto;
    return this.areaService.create(areaData, regionId);
  }

  @Get()
  findAll() {
    return this.areaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.areaService.findOne(+id);
  }

  @Get('name/:name')
  async findOneByName(@Param('name') name: string){
    return this.areaService.findOneByName(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAreaDto: UpdateAreaDto) {
    return this.areaService.update(+id, updateAreaDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.areaService.remove(+id);
  // }
}
