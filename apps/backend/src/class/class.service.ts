import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClassService {
  constructor(private readonly prismaService: PrismaService) {}
  async createClass(teacherId: string, createClassDto: CreateClassDto) {
    const teacher = await this.prismaService.teacher.findUnique({
      where: { userId: teacherId },
      include: { user: { include: { school: true } } },
    });

    //TODO: Improve this code Make one to many correctly
    return this.prismaService.class.create({
      data: {
        ...createClassDto,
        homeroomTeacher: { connect: { id: teacher?.id } },
        school: { connect: { id: teacher?.user.school[0].id } },
      },
    });
  }
}
