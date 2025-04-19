import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AreaService {
    constructor(private readonly prisma: PrismaService) {
        this.prisma = new PrismaService();
    }

    //C
    async create(data: {name: string}) {
        return this.prisma.area.create({data,});
    }

    //R
    async findAll(){
        return this.prisma.area.findMany({include:{
            dialect: true,
            regions: true,
        }});
    }

    async findOne(id: number){
        return this.prisma.area.findUnique({
            where: {id},
            include:{
                dialect: true,
                regions: true,
            }
    });
    }

    //U
    async update(id: number, data: {name: string}) {
        return this.prisma.area.update({where: {id}, data});
    }

    //D
    async delete(id: number) {
        return this.prisma.area.delete({where: {id}});
    }

}
