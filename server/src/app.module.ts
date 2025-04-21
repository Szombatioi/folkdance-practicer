import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DialectModule } from './dialect/dialect.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dialect } from './dialect/entities/dialect.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RegionModule } from './region/region.module';
import { AreaModule } from './area/area.module';
import { LandModule } from './land/land.module';
import { Region } from './region/entities/region.entity';
import { Area } from './area/entities/area.entity';
import { Land } from './land/entities/land.entity';
import { RegionService } from './region/region.service';
import { DanceModule } from './dance/dance.module';
import { Dance } from './dance/entities/dance.entity';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [Dialect, Region, Area, Land, Dance],
        synchronize: true, //TODO: remove this in production!
      })
    }),
    TypeOrmModule.forFeature([Dialect, Region, Area, Land]),
    DialectModule,
    RegionModule,
    AreaModule,
    LandModule,
    DanceModule,
  ],
  controllers: [AppController],
  providers: [AppService, RegionService],
})
export class AppModule {}
