import { Module } from '@nestjs/common';
import { AreaController } from './area/area.controller';

@Module({
  controllers: [AreaController],
  providers: [],
})
export class AppModule {}
