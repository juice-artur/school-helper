import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { ApiOperation, ApiOkResponse, ApiBody, ApiTags } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { CreateSchoolDto } from 'src/school/dto/create-school.dto';
import { SchoolDto } from 'src/school/dto/school.dto';
import { UserDec } from 'src/decorators/user.decorator';

@ApiTags('Quiz Endpoints')
@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.TEACHER)
  @ApiOperation({ summary: 'Create quiz' })
  @ApiOkResponse({
    type: SchoolDto,
  })
  @ApiBody({ type: CreateSchoolDto })
  @Post()
  createQuiz(@UserDec() user: any, @Body() createQuizDto: CreateQuizDto) {
    return this.quizService.createQuiz(user.id, createQuizDto);
  }
}
