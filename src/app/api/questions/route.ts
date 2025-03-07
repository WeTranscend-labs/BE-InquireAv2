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

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);

    const paginationResult = await questionService.getQuestions(page, limit);

    console.log(111111111111);

    return NextResponse.json(
      ApiResponse.success(paginationResult, 'Questions fetched successfully')
    );
  } catch (error) {
    return handleError(error);
  }
}
