import { CHttpError } from "./CHttpError";

export class CBadRequestError extends CHttpError {
  constructor(errorKey?: string) {
    super(400, errorKey);
  }
}
