import { NextResponse } from 'next/server';
import { createQuestionSchema } from '@/module/question/question.schema';
import { QuestionRepository } from '@/module/question/question.repository';
import { QuestionService } from '@/module/question/question.service';
import { handleError } from '@/exception/GlobalExceptionHandler';

const questionService = new QuestionService(new QuestionRepository());

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = createQuestionSchema.parse(body); // Validate dữ liệu từ frontend
    const question = await questionService.createQuestion(
      Number(data.questionId), // Chuyển thành số nguyên nếu cần
      data.questionText,
      data.questionContent,
      data.category
    );
    return NextResponse.json(question, { status: 201 });
  } catch (error) {
    const { statusCode, error: errorResponse } = handleError(error);
    return NextResponse.json(errorResponse, { status: statusCode });
  }
}
