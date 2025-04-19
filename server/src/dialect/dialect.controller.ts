import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DialectService } from './dialect.service';

@Controller('dialect')
export class DialectController {
    constructor(private readonly dialectService: DialectService) {}

    // @Get()
    // async findAll() {
    //     return this.dialectService.findAll();
    // }

    // @Get(':id')
    // async findOne(@Param('id') id: string) {
    //     return this.dialectService.findOne(+id);
    // }

    // @Post()
    // async create(@Body() data: { name: string }) {
    //     return this.dialectService.create(data);
    // }

    // @Patch(':id')
    // async update(@Param('id') id: string, @Body() data: { name: string }) {
    //     return this.dialectService.update(+id, data);
    // }

    // @Delete(':id')
    // async delete(@Param('id') id: string) {
    //     return this.dialectService.delete(+id);
    // }
}
