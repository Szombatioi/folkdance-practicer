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
import { DanceTypesModule } from './dance-types/dance-types.module';
import { DanceType } from './dance-types/entities/dance-type.entity';
import { DanceCategoriesModule } from './dance-categories/dance-categories.module';
import { DanceCategory } from './dance-categories/entities/dance-category.entity';
import { DanceNotesModule } from './dance-notes/dance-notes.module';
import { DanceNote } from './dance-notes/entities/dance-note.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { PracticeModule } from './practice/practice.module';
import { Practice } from './practice/entities/practice.entity';
import { FiguresModule } from './figures/figures.module';
import { Figure } from './figures/entities/figure.entity';
import { FigureTypesModule } from './figure-types/figure-types.module';
import { FigureType } from './figure-types/entities/figure-type.entity';
import { MusicSourceModule } from './music-source/music-source.module';
import { MusicLyricsModule } from './music-lyrics/music-lyrics.module';
import { MusicModule } from './music/music.module';
import { Music } from './music/entities/music.entity';
import { MusicLyric } from './music-lyrics/entities/music-lyric.entity';
import { MusicSource } from './music-source/entities/music-source.entity';


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
        entities: [Dialect, Region, Area, Land, Dance, DanceType, DanceCategory, DanceType, DanceNote, User, Practice, Figure, FigureType, Music, MusicLyric, MusicSource],
        synchronize: true, //TODO: remove this in production!
      })
    }),
    TypeOrmModule.forFeature([Dialect, Region, Area, Land, Music]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    DialectModule,
    RegionModule,
    AreaModule,
    LandModule,
    DanceModule,
    DanceTypesModule,
    DanceCategoriesModule,
    DanceNotesModule,
    UserModule,
    PracticeModule,
    FiguresModule,
    FigureTypesModule,
    MusicSourceModule,
    MusicLyricsModule,
    MusicModule,
  ],
  controllers: [AppController],
  providers: [AppService, RegionService],
})
export class AppModule {}
