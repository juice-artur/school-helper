import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ResponseQuestionDto } from './dto/student-answer.dto';
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

  async createQuestionAnswerBy(
    userId: string,
    responseQuestionDto: ResponseQuestionDto,
  ) {
    const student = await this.prismaService.student.findUnique({
      where: { userId: userId },
    });
    if (!student) {
      return new NotFoundException();
    }

    return this.prismaService.studentAnswer.create({
      data: {
        student: { connect: { id: student?.id } },
        question: { connect: { id: responseQuestionDto.questionId } },
        quiz: { connect: { id: responseQuestionDto.quizId } },
        response: responseQuestionDto.response,
      },
    });
  }
}
