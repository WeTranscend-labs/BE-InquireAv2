import { PrismaClient } from '@prisma/client';
import { Answer } from './answer.entity';
const prisma = new PrismaClient();

export class AnswerRepository {
  constructor() {}

  async create(answer: Answer) {
    return prisma.answer.create({
      data: {
        answerText: answer.answerText,
      },
    });
  }

  async findAll(offset: number, limit: number) {
    const answers = await prisma.answer.findMany({
      skip: offset,
      take: limit,
    });
    const total = await prisma.answer.count();
    return { answers, total };
  }

  async findById(id: string) {
    return prisma.answer.findUnique({
      where: { id },
    });
  }
}
