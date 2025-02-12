type ErrorDetail = {
  code: string;
  description: string;
  statusCode: number;
};

export const ERROR_CODES: Record<string, ErrorDetail> = {
  VALIDATION_ERROR: {
    code: 'VALIDATION_ERROR',
    description: 'Invalid input data',
    statusCode: 400,
  },
  QUESTION_ALREADY_EXISTS: {
    code: 'QUESTION_ALREADY_EXISTS',
    description: 'Question ID already exists',
    statusCode: 409,
  },
  INTERNAL_SERVER_ERROR: {
    code: 'INTERNAL_SERVER_ERROR',
    description: 'Unexpected error occurred',
    statusCode: 500,
  },
};
