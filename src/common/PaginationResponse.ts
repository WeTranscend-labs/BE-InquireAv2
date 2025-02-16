export class PaginationResponse<T> {
  totalPages: number;
  pageNumber: number;
  pageLimit: number;
  totalRecords: number;
  data: T[];

  private constructor(
    data: T[],
    totalRecords: number,
    pageNumber: number,
    pageLimit: number
  ) {
    this.data = data;
    this.totalRecords = totalRecords;
    this.pageNumber = pageNumber;
    this.pageLimit = pageLimit;
    this.totalPages = Math.ceil(totalRecords / pageLimit);
  }

  static builder<T>() {
    return new PaginationResponseBuilder<T>();
  }

  static create<T>(
    data: T[],
    totalRecords: number,
    pageNumber: number,
    pageLimit: number
  ) {
    return new PaginationResponse<T>(data, totalRecords, pageNumber, pageLimit);
  }
}

class PaginationResponseBuilder<T> {
  private _data: T[] = [];
  private _totalRecords: number = 0;
  private _pageNumber: number = 1;
  private _pageLimit: number = 10;

  data(data: T[]): this {
    this._data = data;
    return this;
  }

  totalRecords(totalRecords: number): this {
    this._totalRecords = totalRecords;
    return this;
  }

  pageNumber(pageNumber: number): this {
    this._pageNumber = pageNumber;
    return this;
  }

  pageLimit(pageLimit: number): this {
    this._pageLimit = pageLimit;
    return this;
  }

  build(): PaginationResponse<T> {
    return PaginationResponse.create(
      this._data,
      this._totalRecords,
      this._pageNumber,
      this._pageLimit
    );
  }
}
