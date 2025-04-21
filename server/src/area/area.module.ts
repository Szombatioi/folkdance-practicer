import { Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaController } from './area.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area } from './entities/area.entity';
import { RegionService } from 'src/region/region.service';
import { Region } from 'src/region/entities/region.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Area, Region]),
  ],
  controllers: [AreaController],
  providers: [AreaService],
  exports: [AreaService]
})
export class AreaModule {}
