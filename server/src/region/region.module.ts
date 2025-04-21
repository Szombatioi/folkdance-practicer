import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Region } from './entities/region.entity';
import { Dialect } from 'src/dialect/entities/dialect.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Region, Dialect])
  ],
  controllers: [RegionController],
  providers: [RegionService],
})
export class RegionModule {}
