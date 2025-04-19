import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'nestjs-prisma';
import { DialectModule } from './dialect/dialect.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [PrismaModule.forRoot({ isGlobal: true }), DialectModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
