import { Module } from '@nestjs/common';
import { MusicSourceService } from './music-source.service';
import { MusicSourceController } from './music-source.controller';

@Module({
  controllers: [MusicSourceController],
  providers: [MusicSourceService],
})
export class MusicSourceModule {}
