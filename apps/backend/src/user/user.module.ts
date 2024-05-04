import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '../prisma/prisma.service';
import { JwtGuard } from '../auth/gaurds/jwt-auth.guard';
import { VerificationTokenService } from '../verification-token/verification-token.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, JwtGuard, VerificationTokenService],
  exports: [UserService],
})
export class UserModule {}
