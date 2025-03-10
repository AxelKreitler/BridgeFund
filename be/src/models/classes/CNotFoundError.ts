import { CHttpError } from "./CHttpError";

export class CNotFoundError extends CHttpError {
  constructor(errorKey?: string) {
    super(404, errorKey || "not.found");
  }
}
