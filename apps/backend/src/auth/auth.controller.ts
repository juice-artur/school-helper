import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { SignInDto } from './dto/SignInDto';
import { RefreshJwtGuard } from './gaurds/refresh-jwt-auth.guard';
import { AuthenticatedRequest } from './dto/authenticated-request-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @Post('signin')
  async signIn(@Body() signInDto: SignInDto) {
    console.log(signInDto)
    return this.authService.signIn(signInDto);
  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refrshToken(@Request() req: AuthenticatedRequest) {
    return this.authService.refreshToken(req.user!.userId);
  }
}
