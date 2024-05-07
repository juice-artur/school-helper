import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { RolesGuard } from 'src/auth/gaurds/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { UserDec } from 'src/decorators/user.decorator';
import { JwtGuard } from 'src/auth/gaurds/jwt-auth.guard';
import { ApiOperation, ApiOkResponse, ApiBody, ApiTags } from '@nestjs/swagger';
import { SchoolDto } from './dto/school.dto';

@ApiTags('School Endpoints')
@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.DIRECTOR)
  @ApiOperation({ summary: 'Create school' })
  @ApiOkResponse({
    type: SchoolDto,
  })
  @ApiBody({ type: CreateSchoolDto })
  @Post()
  create(@Body() createSchoolDto: CreateSchoolDto, @UserDec() user: any) {
    return this.schoolService.createSchool(createSchoolDto, user.id);
  }

  @UseGuards(JwtGuard)
  @Get()
  @ApiOperation({ summary: 'Create school' })
  @ApiOkResponse({
    type: SchoolDto,
  })
  findOne(@UserDec() user: any) {
    return this.schoolService.findOneByUserId(user.id);
  }
}
