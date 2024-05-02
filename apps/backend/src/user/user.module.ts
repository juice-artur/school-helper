import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtAuthGuard } from 'src/auth/gaurds/jwt-auth.guard';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, JwtAuthGuard],
  exports: [UserService],
})
export class UserModule {}
