import { z } from 'zod';

export const createAnswerSchema = z.object({
  answerText: z.string().min(5, 'Answer text must be at least 5 characters'),
});
