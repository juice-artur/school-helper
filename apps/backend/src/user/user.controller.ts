import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { JwtGuard as JwtGuard } from 'src/auth/gaurds/jwt-auth.guard';
import { RolesGuard } from 'src/auth/gaurds/roles.guard';
import { UserDec } from 'src/decorators/user.decorator';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtGuard, RolesGuard)
  @Get()
  @Roles(Role.ADMIN)
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtGuard)
  @Patch()
  updateUser(@UserDec() user: any, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(user.id, updateUserDto);
  }
}
