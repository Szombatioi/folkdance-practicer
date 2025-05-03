import { Module } from '@nestjs/common';
import { MusicLyricsService } from './music-lyrics.service';
import { MusicLyricsController } from './music-lyrics.controller';

@Module({
  controllers: [MusicLyricsController],
  providers: [MusicLyricsService],
})
export class MusicLyricsModule {}
