import { Module } from '@nestjs/common';
import { DialectService } from './dialect.service';
import { DialectController } from './dialect.controller';

@Module({
  controllers: [DialectController],
  providers: [DialectService],
  exports: [DialectService],
})
export class DialectModule {}
