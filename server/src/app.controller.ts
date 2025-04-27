import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';

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

  @Post("predict")
  async predictByDanceName(@Body() data: {
    title: string
  }){
    try{
      const reply = await axios.post("http://localhost:3002/predict", data);
      // console.log(reply.data);
      return reply.data;
    } catch(error){
      console.log(error);
    }
  }


}
