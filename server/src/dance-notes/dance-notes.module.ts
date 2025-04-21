import { Module } from '@nestjs/common';
import { DanceNotesService } from './dance-notes.service';
import { DanceNotesController } from './dance-notes.controller';

@Module({
  controllers: [DanceNotesController],
  providers: [DanceNotesService],
})
export class DanceNotesModule {}
