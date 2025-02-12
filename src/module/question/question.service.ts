import { Question } from './question.entity';
import { QuestionRepository } from './question.repository';
import { AppError } from '@/exception/GlobalExceptionHandler';

export class QuestionService {
  constructor(private questionRepository: QuestionRepository) {}

  async createQuestion(
    questionId: number,
    questionText: string,
    questionContent: string,
    category: string
  ) {
    const existingQuestion = await this.questionRepository.findById(questionId);
    if (existingQuestion) throw new AppError('QUESTION_ALREADY_EXISTS');

    const question = Question.create(
      questionId,
      questionText,
      questionContent,
      category
    );
    return this.questionRepository.create(question);
  }
}
