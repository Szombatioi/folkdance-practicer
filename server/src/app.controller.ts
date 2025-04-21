import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("structure/:from/:id")
  getStructure(@Param("from") from: "land" | "area", @Param("id") id: number){
    switch(from){
      case "land": 
        return this.appService.getStructureByLand(id);
      case "area":
        return this.appService.getStructureByArea(id);
    }
  }


}
