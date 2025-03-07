import { ApiResponse } from '@/common/ApiResponse';
import { handleError } from '@/exception/GlobalExceptionHandler';
import { AnswerRepository } from '@/module/answer/answer.repository';
import { AnswerService } from '@/module/answer/answer.service';
import { NextResponse } from 'next/server';

const answerService = new AnswerService(new AnswerRepository());

type Params = Promise<{ answerId: string }>;

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const raw = await params;

    const answerId = raw.answerId;

    if (!answerId) {
      throw new Error('Answer ID is required');
    }

    const answer = await answerService.getAnswerById(answerId);

    return NextResponse.json(
      ApiResponse.success(answer, 'Answer fetched successfully')
    );
  } catch (error) {
    return handleError(error);
  }
}
