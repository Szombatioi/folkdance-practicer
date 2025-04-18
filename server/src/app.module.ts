import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'Test123', //TODO: replace later
      database: 'fdp_dev',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // important! Don't use true in production
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
