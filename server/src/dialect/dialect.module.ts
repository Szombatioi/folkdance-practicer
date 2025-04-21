import { Module } from '@nestjs/common';
import { DialectService } from './dialect.service';
import { DialectController } from './dialect.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dialect } from './entities/dialect.entity';
import { Region } from 'src/region/entities/region.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dialect, Region])],
  controllers: [DialectController],
  providers: [DialectService],
  exports: [DialectService],
})
export class DialectModule {}
