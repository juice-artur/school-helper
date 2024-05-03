import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { SignInDto } from './dto/SignInDto';
import { AuthRequestHelper } from './utils/cookie-helper.service';
import { JwtGuard } from './gaurds/jwt-auth.guard';
import { UserDec } from '../decorators/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly requestHelper: AuthRequestHelper,
  ) {}

  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.studentSignUp(createUserDto);
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

  @UseGuards(JwtGuard)
  @Get('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    return this.requestHelper.clearJwtTokenFromCookie(res);
  }

  @UseGuards(JwtGuard)
  @Get('get/me')
  async getMe(@UserDec() user: any) {
    return this.authService.getUserById(user.id);
  }
}
