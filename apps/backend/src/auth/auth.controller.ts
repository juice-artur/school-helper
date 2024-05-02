import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { SignInDto } from './dto/SignInDto';
import { AuthRequestHelper } from './utils/cookie-helper.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly requestHelper: AuthRequestHelper,
  ) {}

  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @Post('signin')
  async signIn(
    @Res({ passthrough: true }) res: Response,
    @Body() signInDto: SignInDto,
  ) {
    const user = await this.authService.signIn(signInDto);
    if (user) {
      const token = await this.authService.signJwtToken(user.user.id);

      this.requestHelper.attachJwtTokenToCookie(res, token);
    }
  }
}
