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
  QUESTION_ALREADY_EXISTS: {
    code: 1002,
    message: 'Question ID already exists',
    statusCode: 409,
  },
  INTERNAL_SERVER_ERROR: {
    code: 9999,
    message: 'Unexpected error occurred',
    statusCode: 500,
  },
};
