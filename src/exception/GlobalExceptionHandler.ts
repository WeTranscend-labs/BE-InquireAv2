import { NextResponse } from 'next/server';
import { AppException } from '@/exception/AppException';
import { ZodError } from 'zod';
import { ApiResponse } from '@/common/ApiResponse';
import { ERROR_CODES } from './ErrorCode';

export function handleError(error: any) {
  if (error instanceof AppException) {
    return NextResponse.json(
      ApiResponse.error(error.errorDetail.code, error.errorDetail.message),
      { status: error.errorDetail.statusCode }
    );
  }

  if (error instanceof ZodError) {
    return NextResponse.json(
      ApiResponse.error(
        ERROR_CODES.VALIDATION_ERROR.code,
        ERROR_CODES.VALIDATION_ERROR.message
      ),
      { status: 400 }
    );
  }

  return NextResponse.json(
    ApiResponse.error(
      ERROR_CODES.INTERNAL_SERVER_ERROR.code,
      ERROR_CODES.INTERNAL_SERVER_ERROR.message
    ),
    { status: 500 }
  );
}
