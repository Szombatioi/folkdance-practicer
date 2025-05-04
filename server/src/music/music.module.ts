import { Module } from "@nestjs/common";
import { MusicService } from "./music.service";
import { MusicController } from "./music.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Music } from "./entities/music.entity";
import { AreaModule } from "src/area/area.module";
import { MusicSourceModule } from "src/music-source/music-source.module";
import { MusicLyricsModule } from "src/music-lyrics/music-lyrics.module";
import { MusicLyric } from "src/music-lyrics/entities/music-lyric.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Music, MusicLyric]),
    AreaModule,
    MusicSourceModule,
  ],
  controllers: [MusicController],
  providers: [MusicService],
  exports: [MusicService],
})
export class MusicModule {}
