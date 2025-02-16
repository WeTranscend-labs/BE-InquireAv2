import { AppException } from '@/exception/AppException';
import { Question } from './question.entity';
import { QuestionRepository } from './question.repository';
import { ERROR_CODES } from '@/exception/ErrorCode';
import { PaginationResponse } from '@/common/PaginationResponse';

export class QuestionService {
  constructor(private questionRepository: QuestionRepository) {}

  async createQuestion(data: {
    questionId: number;
    questionText: string;
    questionContent: string;
    category: string;
  }) {
    const existingQuestion = await this.questionRepository.findByQuestionId(
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

  async getQuestions(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;
    const { questions, total } = await this.questionRepository.findAll(
      offset,
      limit
    );

    return PaginationResponse.builder()
      .data(questions)
      .totalRecords(total)
      .pageNumber(page)
      .pageLimit(limit)
      .build();
  }

  async getQuestionById(questionId: number) {
    if (isNaN(questionId))
      throw new AppException(ERROR_CODES.INVALID_QUESTION_ID);
    const question = await this.questionRepository.findByQuestionId(questionId);
    if (!question) throw new AppException(ERROR_CODES.QUESTION_NOT_FOUND);
    return question;
  }
}
