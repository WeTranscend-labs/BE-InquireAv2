import { ERROR_CODES } from './ErrorCode';

export class AppError extends Error {
  public statusCode: number;
  public code: string;

  constructor(code: string) {
    super(ERROR_CODES[code]?.description || 'Unknown error');
    this.code = code;
    this.statusCode = ERROR_CODES[code]?.statusCode || 500;
  }
}

export function handleError(error: any) {
  if (error instanceof AppError) {
    return {
      statusCode: error.statusCode,
      error: {
        code: error.code,
        message: error.message,
      },
    };
  }
  return {
    statusCode: 500,
    error: {
      code: ERROR_CODES.INTERNAL_SERVER_ERROR.code,
      message: ERROR_CODES.INTERNAL_SERVER_ERROR.description,
    },
  };
}
