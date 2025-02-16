import { z } from 'zod';

export const createQuestionSchema = z.object({
  questionId: z
    .number()
    .int()
    .positive('Question ID must be a positive integer'),
  questionText: z
    .string()
    .min(5, 'Question text must be at least 5 characters'),
  questionContent: z
    .string()
    .min(10, 'Question content must be at least 10 characters'),
  category: z.string().min(3, 'Category must be at least 3 characters'),
});
