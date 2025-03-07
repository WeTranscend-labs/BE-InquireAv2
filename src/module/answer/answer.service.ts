import { AppException } from '@/exception/AppException';
import { Answer } from './answer.entity';
import { AnswerRepository } from './answer.repository';
import { ERROR_CODES } from '@/exception/ErrorCode';

export class AnswerService {
  constructor(private answerRepository: AnswerRepository) {}

  async createAnswer(data: { answerText: string }) {
    const answer = Answer.create(data.answerText);
    return this.answerRepository.create(answer);
  }

  async getAnswerById(id: string) {
    if (!id || typeof id !== 'string')
      throw new AppException(ERROR_CODES.INVALID_ANSWER_ID);

    const answer = await this.answerRepository.findById(id);
    if (!answer) throw new AppException(ERROR_CODES.ANSWER_NOT_FOUND);

    return answer;
  }
}
