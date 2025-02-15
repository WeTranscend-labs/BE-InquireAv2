import { ERROR_CODES, ErrorDetail } from './ErrorCode';

export class AppException extends Error {
  public errorDetail: ErrorDetail;

  constructor(errorDetail: ErrorDetail) {
    super(errorDetail.message || 'Unknown error');
    this.errorDetail = errorDetail;
  }
}
