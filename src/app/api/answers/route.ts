import { NextResponse } from 'next/server';
import { createAnswerSchema } from '@/module/answer/answer.schema';
import { AnswerRepository } from '@/module/answer/answer.repository';
import { AnswerService } from '@/module/answer/answer.service';
import { handleError } from '@/exception/GlobalExceptionHandler';
import { ApiResponse } from '@/common/ApiResponse';

const answerService = new AnswerService(new AnswerRepository());

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = createAnswerSchema.parse(body);

    const answer = await answerService.createAnswer(data);

    return NextResponse.json(
      ApiResponse.success(answer, 'Answer created successfully'),
      { status: 201 }
    );
  } catch (error) {
    return handleError(error);
  }
}
