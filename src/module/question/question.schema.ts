import { z } from 'zod';

export const createQuestionSchema = z.object({
  title: z.string().min(10, 'Title must be at least 10 characters'),
  content: z.string().min(20, 'Content must be at least 20 characters'),
  authorId: z.string().uuid(),
});
