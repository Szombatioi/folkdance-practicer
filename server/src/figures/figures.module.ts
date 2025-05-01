import { Module } from '@nestjs/common';
import { FiguresService } from './figures.service';
import { FiguresController } from './figures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Figure } from './entities/figure.entity';
import { DanceNotesService } from 'src/dance-notes/dance-notes.service';
import { FigureTypesService } from 'src/figure-types/figure-types.service';
import { DanceNotesModule } from 'src/dance-notes/dance-notes.module';
import { FigureTypesModule } from 'src/figure-types/figure-types.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Figure]),
    DanceNotesModule,
    FigureTypesModule
  ],
  controllers: [FiguresController],
  providers: [FiguresService],
})
export class FiguresModule {}
