import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { SchoolModule } from './school/school.module';
import { FileModule } from './file/file.module';
import { VerificationTokenModule } from './verification-token/verification-token.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    AuthModule,
    SchoolModule,
    FileModule,
    VerificationTokenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
