import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'rxjs';

@Injectable()
export class SchoolService {
  constructor(private readonly prismaService: PrismaService) {}
  async createSchool(createSchoolDto: CreateSchoolDto, directorId: string) {
    return await this.prismaService.school.create({
      data: { ...createSchoolDto, director: { connect: { id: directorId } } },
    });
  }

  async findOneByUserId(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id: id },
      include: { school: true },
    });
    if (!user || !user.school) {
      throw NotFoundError;
    }

    return await this.prismaService.school.findUnique({
      where: { id: user.school[0].id },
    });
  }

  findAll() {
    return `This action returns all school`;
  }
  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}
