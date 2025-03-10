export class CHttpError extends Error {
  statusCode: number;
  errorKey?: string;

  constructor(statusCode: number, errorKey?: string) {
    super();
    this.statusCode = statusCode;
    this.errorKey = errorKey;
  }
}
