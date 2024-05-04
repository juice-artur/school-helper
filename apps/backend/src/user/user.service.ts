import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Role, User } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.user.findMany();
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
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
