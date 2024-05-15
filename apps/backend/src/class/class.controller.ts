import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { UserDec } from 'src/decorators/user.decorator';

@ApiTags('Class Endpoints')
@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.TEACHER)
  @ApiOperation({ summary: 'Create class' })
  @Post()
  create(@UserDec() user: any, @Body() createClassDto: CreateClassDto) {
    return this.classService.createClass(user.id, createClassDto);
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.TEACHER)
  @ApiOperation({ summary: 'Get teacher class' })
  @Get()
  getOwnTeacherClass(@UserDec() user: any) {
    return this.classService.getTeacherClassByUserId(user.id);
  }
}
