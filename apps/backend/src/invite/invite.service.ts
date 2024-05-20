import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClassInviteDto } from './dto/create-invite.dto';
import { PrismaService } from '../prisma/prisma.service';
import { log } from 'console';

@Injectable()
export class InviteService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createInviteDto: CreateClassInviteDto) {
    const user = await this.prismaService.user.findUnique({
      where: { email: createInviteDto.userEmail },
    });
    if (!user) {
      throw new NotFoundException();
    }

    console.log(createInviteDto)

    const student = await this.prismaService.student.findUnique({
      where: { userId: user.id },
    });

    if (!student) {
      throw new NotFoundException();
    }
    const invitation = await this.prismaService.invitationToClass.create({
      data: {
        class: { connect: { id: createInviteDto.classId } },
        student: { connect: { id: student.id } },
      },
    });
    return invitation;
  }

  async acceptById(id: string) {
    console.log(id);
    const invitationToClass =
      await this.prismaService.invitationToClass.findUnique({ where: { id } });
    if (!invitationToClass) {
      throw new NotFoundException();
    }
    console.log(invitationToClass);


    const student = await this.prismaService.student.update({
      where: { id: invitationToClass.studentId },
      data: { classId: null },
    });
  
    const updatedStudent = await this.prismaService.student.update({
      where: { id: invitationToClass.studentId },
      data: { class: { connect: { id: invitationToClass.classId } } },
    });
  
    await this.prismaService.invitationToClass.delete({ where: { id: id } });
    return updatedStudent;
  }
}
