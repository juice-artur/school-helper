import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CreateQuizQuestionDto } from './dto/create-quiz-question.dto';

@Injectable()
export class QuizService {
  constructor(private readonly prismaService: PrismaService) {}
  async createQuiz(userId: string, createQuizDto: CreateQuizDto) {
    const teacher = await this.prismaService.teacher.findUnique({
      where: { userId: userId },
    });

    return this.prismaService.quiz.create({
      data: { ...createQuizDto, creator: { connect: { id: teacher?.id } } },
    });
  }

  async createQuizQuestion(createQuizQuestionDto: CreateQuizQuestionDto) {
    return this.prismaService.question.create({
      data: {
        answer: createQuizQuestionDto.answer,
        answerOptions: createQuizQuestionDto.answerOptions,
        text: createQuizQuestionDto.text,
        questionType: createQuizQuestionDto.questionType,
        quiz: { connect: { id: createQuizQuestionDto.quizId } },
      },
    });
  }
}
