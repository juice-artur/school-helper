import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { ApiOperation, ApiOkResponse, ApiBody, ApiTags } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { UserDec } from 'src/decorators/user.decorator';
import { CreateQuizQuestionDto } from './dto/create-quiz-question.dto';

@ApiTags('Quiz Endpoints')
@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.TEACHER)
  @ApiOperation({ summary: 'Create quiz' })
  @ApiOkResponse({
    type: CreateQuizDto,
  })
  @ApiBody({ type: CreateQuizDto })
  @Post()
  createQuiz(@UserDec() user: any, @Body() createQuizDto: CreateQuizDto) {
    return this.quizService.createQuiz(user.id, createQuizDto);
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.TEACHER)
  @ApiOperation({ summary: 'Create quiz question' })
  @ApiOkResponse({
    type: CreateQuizQuestionDto,
  })
  @ApiBody({ type: CreateQuizQuestionDto })
  @Post('question')
  createQuizQuestion(
    @UserDec() user: any,
    @Body() createQuizDto: CreateQuizQuestionDto,
  ) {
    return this.quizService.createQuizQuestion(createQuizDto);
  }
}
