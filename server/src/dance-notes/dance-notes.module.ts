import { Module } from '@nestjs/common';
import { DanceNotesService } from './dance-notes.service';
import { DanceNotesController } from './dance-notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DanceNote } from './entities/dance-note.entity';
import { DanceModule } from 'src/dance/dance.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([DanceNote]),
    DanceModule
  ],
  controllers: [DanceNotesController],
  providers: [DanceNotesService],
  exports: [DanceNotesService]
})
export class DanceNotesModule {}
