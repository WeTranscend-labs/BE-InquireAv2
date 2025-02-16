import { NextResponse } from 'next/server';
import { createQuestionSchema } from '@/module/question/question.schema';
import { QuestionRepository } from '@/module/question/question.repository';
import { QuestionService } from '@/module/question/question.service';
import { handleError } from '@/exception/GlobalExceptionHandler';
import { ApiResponse } from '@/common/ApiResponse';

const questionService = new QuestionService(new QuestionRepository());

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = createQuestionSchema.parse(body);

    const question = await questionService.createQuestion(data);

    return NextResponse.json(
      ApiResponse.success(question, 'Question created successfully'),
      { status: 201 }
    );
  } catch (error) {
    return handleError(error);
  }
}
