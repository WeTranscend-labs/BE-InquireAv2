import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { questionId, questionText, questionContent, category } =
      await req.json();

    if (!questionId || !questionText || !questionContent || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Tạo câu hỏi trong MongoDB
    const question = await prisma.question.create({
      data: { questionId, questionText, questionContent, category },
    });

    return NextResponse.json(
      { message: 'Question created', question },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving question:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
