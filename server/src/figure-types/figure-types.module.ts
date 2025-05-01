import { Module } from '@nestjs/common';
import { FigureTypesService } from './figure-types.service';
import { FigureTypesController } from './figure-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FigureType } from './entities/figure-type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FigureType])
  ],
  controllers: [FigureTypesController],
  providers: [FigureTypesService],
  exports: [FigureTypesService]
})
export class FigureTypesModule {}
