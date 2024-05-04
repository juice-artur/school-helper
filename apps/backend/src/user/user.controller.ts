import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { JwtGuard as JwtGuard } from 'src/auth/gaurds/jwt-auth.guard';
import { RolesGuard } from 'src/auth/gaurds/roles.guard';
import { UserDec } from 'src/decorators/user.decorator';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { ApiOperation, ApiOkResponse, ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { VerificationTokenService } from 'src/verification-token/verification-token.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly verificationTokenService: VerificationTokenService,
  ) {}

  @UseGuards(JwtGuard, RolesGuard)
  @Get()
  @Roles(Role.ADMIN)
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.DIRECTOR)
  @ApiOperation({ summary: 'Create teacher' })
  @ApiOkResponse({
    type: CreateUserDto,
  })
  @ApiBody({ type: CreateUserDto })
  @Post('create/teacher')
  async createTeacher(@Body() createTeacherDto: CreateTeacherDto) {
    const user = await this.userService.createTeacher(createTeacherDto);
    const token = await this.verificationTokenService.create(user.id);
    console.log(token);
    return user;
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.DIRECTOR)
  @ApiOperation({ summary: 'Create teacher' })
  @ApiOkResponse({
    type: CreateUserDto,
  })
  @ApiBody({ type: CreateUserDto })
  @Post('activate/teacher')
  async activateTeacher(@Body() createTeacherDto: CreateTeacherDto) {
    const user = await this.userService.createTeacher(createTeacherDto);
    const token = await this.verificationTokenService.create(user.id);
    console.log(token);
    return user;
  }

  @UseGuards(JwtGuard)
  @Patch()
  updateUser(@UserDec() user: any, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(user.id, updateUserDto);
  }
}
