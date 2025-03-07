import { PrismaClient } from '@prisma/client';
import { Question } from './question.entity';
const prisma = new PrismaClient();

export class QuestionRepository {
  constructor() {}

  async create(question: Question) {
    return prisma.question.create({
      data: {
        questionText: question.questionText,
        questionContent: question.questionContent,
        category: question.category,
      },
    });
  }

  async findAll(offset: number, limit: number) {
    const questions = await prisma.question.findMany({
      skip: offset,
      take: limit,
    });
    const total = await prisma.question.count();
    return { questions, total };
  }

  async findById(id: string) {
    return prisma.question.findUnique({
      where: { id },
    });
  }
}
