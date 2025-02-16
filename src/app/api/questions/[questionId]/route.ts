import { ApiResponse } from '@/common/ApiResponse';
import { handleError } from '@/exception/GlobalExceptionHandler';
import { QuestionRepository } from '@/module/question/question.repository';
import { QuestionService } from '@/module/question/question.service';
import { NextResponse } from 'next/server';

const questionService = new QuestionService(new QuestionRepository());

export async function GET(
  req: Request,
  { params }: { params: { questionId: string } }
) {
  try {
    const questionId = parseInt(params.questionId, 10);

    const question = await questionService.getQuestionById(questionId);

    return NextResponse.json(
      ApiResponse.success(question, 'Question fetched successfully')
    );
  } catch (error) {
    return handleError(error);
  }
}
