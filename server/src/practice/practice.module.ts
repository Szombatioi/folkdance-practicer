import { Module } from "@nestjs/common";
import { PracticeService } from "./practice.service";
import { PracticeController } from "./practice.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Practice } from "./entities/practice.entity";
import { DanceModule } from "src/dance/dance.module";

@Module({
  imports: [TypeOrmModule.forFeature([Practice]), DanceModule],
  controllers: [PracticeController],
  providers: [PracticeService],
})
export class PracticeModule {}
