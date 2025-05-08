import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { DialectService } from './dialect.service';
import { UpdateDialectDto } from './dto/update-dialect.dto';

@Controller('dialect')
export class DialectController {
  constructor(private readonly dialectService: DialectService) {}

  @Post()
  create(@Body() data: { name: string }) {
    return this.dialectService.create(data);
  }

  @Get()
  findAll() {
    return this.dialectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dialectService.findOne(+id);
  }

  @Get('name/:name')
  findByName(@Param('name') name: string){
    return this.dialectService.findByName(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDialectDto: UpdateDialectDto) {
    return this.dialectService.update(+id, updateDialectDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.dialectService.remove(+id);
  // }
}
