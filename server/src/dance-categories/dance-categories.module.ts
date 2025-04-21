import { Module } from '@nestjs/common';
import { DanceCategoriesService } from './dance-categories.service';
import { DanceCategoriesController } from './dance-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DanceCategory } from './entities/dance-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DanceCategory])],
  controllers: [DanceCategoriesController],
  providers: [DanceCategoriesService],
  exports: [DanceCategoriesService]
})
export class DanceCategoriesModule {}
