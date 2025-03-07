import { AppException } from '@/exception/AppException';
import { Question } from './question.entity';
import { QuestionRepository } from './question.repository';
import { ERROR_CODES } from '@/exception/ErrorCode';
import { PaginationResponse } from '@/common/PaginationResponse';

export class QuestionService {
  constructor(private questionRepository: QuestionRepository) {}

  async createQuestion(data: {
    questionText: string;
    questionContent: string;
    category: string;
  }) {
    // Không cần kiểm tra existingQuestion dựa trên questionId nữa
    const question = Question.create(
      data.questionText,
      data.questionContent,
      data.category
    );
    return this.questionRepository.create(question); // Trả về question với _id từ MongoDB
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

  async getQuestionById(id: string) {
    // Đổi questionId thành id kiểu string
    if (!id || typeof id !== 'string')
      // Kiểm tra id hợp lệ
      throw new AppException(ERROR_CODES.INVALID_QUESTION_ID);
    const question = await this.questionRepository.findById(id); // Đổi findByQuestionId thành findById
    if (!question) throw new AppException(ERROR_CODES.QUESTION_NOT_FOUND);
    return question;
  }
}
