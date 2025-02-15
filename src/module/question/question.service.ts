import { AppException } from '@/exception/AppException';
import { Question } from './question.entity';
import { QuestionRepository } from './question.repository';
import { ERROR_CODES } from '@/exception/ErrorCode';

export class QuestionService {
  constructor(private questionRepository: QuestionRepository) {}

  async createQuestion(data: {
    questionId: number;
    questionText: string;
    questionContent: string;
    category: string;
  }) {
    const existingQuestion = await this.questionRepository.findById(
      data.questionId
    );
    if (existingQuestion)
      throw new AppException(ERROR_CODES.QUESTION_ALREADY_EXISTS);

    const question = Question.create(
      data.questionId,
      data.questionText,
      data.questionContent,
      data.category
    );
    return this.questionRepository.create(question);
  }
}
