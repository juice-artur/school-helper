import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SchoolService {
  constructor(private readonly prismaService: PrismaService) {}
  async createSchool(createSchoolDto: CreateSchoolDto, directorId: string) {
    return await this.prismaService.school.create({
      data: { ...createSchoolDto, director: { connect: { id: directorId } } },
    });
  }

  findAll() {
    return `This action returns all school`;
  }

  findOne(id: number) {
    return `This action returns a #${id} school`;
  }

  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}
