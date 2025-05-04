import { forwardRef, Module } from '@nestjs/common';
import { MusicLyricsService } from './music-lyrics.service';
import { MusicLyricsController } from './music-lyrics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicLyric } from './entities/music-lyric.entity';
import { MusicModule } from 'src/music/music.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([MusicLyric]),
    MusicModule
  ],
  controllers: [MusicLyricsController],
  providers: [MusicLyricsService],
  exports: [MusicLyricsService]
})
export class MusicLyricsModule {}
