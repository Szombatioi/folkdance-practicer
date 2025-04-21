import { Module } from '@nestjs/common';
import { LandService } from './land.service';
import { LandController } from './land.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Land } from './entities/land.entity';
import { Area } from 'src/area/entities/area.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Land, Area])
  ],
  controllers: [LandController],
  providers: [LandService],
})
export class LandModule {}
