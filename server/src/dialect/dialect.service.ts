import { Injectable } from '@nestjs/common';
import { UpdateDialectDto } from './dto/update-dialect.dto';
import { PrismaService } from 'nestjs-prisma';


@Injectable()
export class DialectService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: {name: string}): Promise<any> {
    return await this.prismaService.dialect.create({data});
  }

  findAll() {
    return `This action returns all dialect`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dialect`;
  }

  update(id: number, updateDialectDto: UpdateDialectDto) {
    return `This action updates a #${id} dialect`;
  }

  remove(id: number) {
    return `This action removes a #${id} dialect`;
  }
}
