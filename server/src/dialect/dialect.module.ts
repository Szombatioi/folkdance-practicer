import { Module } from '@nestjs/common';
import { DialectService } from './dialect.service';
import { DialectController } from './dialect.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule],
  providers: [DialectService],
  controllers: [DialectController],
  exports: [DialectService],
})
export class DialectModule {}
