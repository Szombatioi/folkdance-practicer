import { Module } from '@nestjs/common';
import { DanceTypesService } from './dance-types.service';
import { DanceTypesController } from './dance-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DanceType } from './entities/dance-type.entity';
import { DanceCategoriesService } from 'src/dance-categories/dance-categories.service';
import { DanceCategoriesModule } from 'src/dance-categories/dance-categories.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([DanceType]), 
    DanceCategoriesModule
  ],
  controllers: [DanceTypesController],
  providers: [DanceTypesService],
  exports: [DanceTypesService]
})
export class DanceTypesModule {}
