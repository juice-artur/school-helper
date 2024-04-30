import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { SignInDto } from './dto/SignInDto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async signUp(createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.userService.findOneByEmail(signInDto.email);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(
      signInDto.password,
      user.password!,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('password');
    }

    const token = this.jwtService.sign({ userId: user.id });
    const refreshToken = this.jwtService.sign(
      { userId: user.id },
      { expiresIn: '7d', secret: `${process.env.JWT_REFRESH_SECRET}` },
    );

    return {
      user,
      accessToken: token,
      refreshToken: refreshToken,
    };
  }

  async refreshToken(userId: string) {
    const user = await this.userService.findOneById(userId);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const accessToken = this.jwtService.sign({ userId: user.id });
    return {
      accessToken: accessToken,
    };
  }
}
