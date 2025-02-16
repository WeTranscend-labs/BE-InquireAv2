import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class QuestionRepository {
  async findByQuestionId(questionId: number) {
    return await prisma.question.findFirst({
      where: {
        questionId: questionId,
      },
    });
  }

  async create(question: any) {
    return prisma.question.create({ data: question });
  }

  async findAll(offset: number, limit: number) {
    const questions = await prisma.question.findMany({
      skip: offset,
      take: limit,
      orderBy: { createdAt: 'desc' },
    });

    const total = await prisma.question.count();

    return { questions, total };
  }
}
