import { Module } from '@nestjs/common';
import { LandService } from './land.service';
import { LandController } from './land.controller';


@Module({
  providers: [LandService],
  controllers: [LandController]
})
export class LandModule {}
