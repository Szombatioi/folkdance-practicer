import { Module } from '@nestjs/common';
import { DialectService } from './dialect.service';
import { DialectController } from './dialect.controller';

@Module({
  providers: [DialectService],
  controllers: [DialectController]
})
export class DialectModule {}
