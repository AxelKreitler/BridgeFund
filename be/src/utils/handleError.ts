import { CHttpError } from "../models";
import { Response } from "express";

export const handleError = (
  error: unknown,
  defaultErrorKey: string,
  res: Response
): void => {
  let statusCode = 500;
  let errorKey = defaultErrorKey;

  if (error instanceof CHttpError) {
    statusCode = error.statusCode;
    errorKey = error.errorKey || "";
  }

  const handledError = {
    errorKey: errorKey,
  };

  res.status(statusCode).json(handledError);
};
