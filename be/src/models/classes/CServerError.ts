import { CHttpError } from "./CHttpError";

export class CServerError extends CHttpError {
  constructor(errorKey?: string) {
    super(500, errorKey);
  }
}
