import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class QuestionRepository {
  async findById(questionId: number) {
    return prisma.question.findUnique({ where: { questionId } });
  }

  async create(question: any) {
    return prisma.question.create({ data: question });
  }
}
