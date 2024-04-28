import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.user.findMany();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    return this.prismaService.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.prismaService.user.findUnique({ where: { email: email } });
  }
}
