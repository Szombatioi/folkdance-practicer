import { Module } from '@nestjs/common';
import { AreaController } from './area/area.controller';
import { DialectController } from './dialect/dialect.controller';
import { DialectModule } from './dialect/dialect.module';
import { AreaModule } from './area/area.module';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [DialectModule, AreaModule, PrismaModule.forRoot({isGlobal: true})],
  controllers: [AreaController, DialectController],
  providers: [],
})
export class AppModule {}
