import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Role, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.user.findMany();
  }

  async createStudent(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const user = await this.prismaService.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
        userRoles: { create: { role: Role.STUDENT } },
      },
    });

    try {
      await this.prismaService.student.create({
        data: {
          user: { connect: { id: user.id } },
        },
      });
    } catch (error) {
      console.error('Failed to create student:', error);
      throw new Error('Student creation failed');
    }

    return user;
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.prismaService.user.findUnique({ where: { email: email } });
  }

  async findOneById(id: string): Promise<User | null> {
    return this.prismaService.user.findUnique({ where: { id: id } });
  }
}
