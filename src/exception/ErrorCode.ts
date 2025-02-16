export type ErrorDetail = {
  code: number;
  message: string;
  statusCode: number;
};

export const ERROR_CODES: Record<string, ErrorDetail> = {
  VALIDATION_ERROR: {
    code: 1001,
    message: 'Invalid input data',
    statusCode: 400,
  },

  // question
  QUESTION_ALREADY_EXISTS: {
    code: 1002,
    message: 'Question ID already exists',
    statusCode: 409,
  },
  QUESTION_NOT_FOUND: {
    code: 1003,
    message: 'Question Id not found',
    statusCode: 400,
  },
  INVALID_QUESTION_ID: {
    code: 1004,
    message: 'Invalid Question Id',
    statusCode: 400,
  },

  INTERNAL_SERVER_ERROR: {
    code: 9999,
    message: 'Unexpected error occurred',
    statusCode: 500,
  },
};
