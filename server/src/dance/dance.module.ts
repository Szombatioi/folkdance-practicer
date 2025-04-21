import { Module } from '@nestjs/common';
import { DanceService } from './dance.service';
import { DanceController } from './dance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dance } from './entities/dance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dance])],
  controllers: [DanceController],
  providers: [DanceService],
})
export class DanceModule {}
