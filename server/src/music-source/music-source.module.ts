import { Module } from '@nestjs/common';
import { MusicSourceService } from './music-source.service';
import { MusicSourceController } from './music-source.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicSource } from './entities/music-source.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MusicSource])],
  controllers: [MusicSourceController],
  providers: [MusicSourceService],
  exports: [MusicSourceService]
})
export class MusicSourceModule {}
