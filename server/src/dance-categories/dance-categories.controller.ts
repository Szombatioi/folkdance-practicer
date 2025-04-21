import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DanceCategoriesService } from './dance-categories.service';
import { CreateDanceCategoryDto } from './dto/create-dance-category.dto';
import { UpdateDanceCategoryDto } from './dto/update-dance-category.dto';

@Controller('dance-categories')
export class DanceCategoriesController {
  constructor(private readonly danceCategoriesService: DanceCategoriesService) {}

  @Post()
  async create(@Body() createDanceCategoryDto: CreateDanceCategoryDto) {
    return await this.danceCategoriesService.create(createDanceCategoryDto);
  }

  @Get()
  async findAll() {
    return await this.danceCategoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.danceCategoriesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDanceCategoryDto: UpdateDanceCategoryDto) {
    return await this.danceCategoriesService.update(+id, updateDanceCategoryDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.danceCategoriesService.remove(+id);
  // }
}
