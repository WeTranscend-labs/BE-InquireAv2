export class ApiResponse<T> {
  code: number;
  message: string;
  result: T | null;

  constructor(code: number, message: string, result: T | null = null) {
    this.code = code;
    this.message = message;
    this.result = result;
  }

  static success<T>(result: T, message: string = 'Success') {
    return new ApiResponse<T>(1000, message, result);
  }

  static error(code: number, message: string) {
    return new ApiResponse<null>(code, message, null);
  }

  toJSON() {
    return Object.fromEntries(
      Object.entries(this).filter(([_, value]) => value !== null)
    );
  }
}
