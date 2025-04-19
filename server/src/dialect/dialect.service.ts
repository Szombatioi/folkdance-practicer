import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class DialectService {
    // constructor(private readonly prisma: PrismaService) {}

    // //C
    // async create(data: {name: string}) {
    //     return this.prisma.dialect.create({data,});
    // }

    // //R
    // async findAll(){
    //     return this.prisma.dialect.findMany({
    //         include: {
    //             areas: true,
    //         }
    //     });
    // }

    // async findOne(id: number){
    //     return this.prisma.dialect.findUnique({
    //         where: {id}, 
    //         include: {
    //             areas: true,
    //         }   
    //     });
    // }

    // //U
    // async update(id: number, data: {name: string}) {
    //     return this.prisma.dialect.update({
    //         where: {id}, 
    //         data,
    //         include: {
    //             areas: true,
    //         }
    //     });
    // }

    // //D
    // async delete(id: number) {
    //     return this.prisma.dialect.delete({where: {id}});
    // }
}

