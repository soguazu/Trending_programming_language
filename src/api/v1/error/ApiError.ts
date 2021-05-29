import { Request, Response } from 'express';
import { logger } from '../../../infra/Logger';

export class ApiError {
  status: number;

  message: string;

  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }

  static createErrorResponse(status: number, message: string): ApiError {
    return new ApiError(status, message);
  }
}

export function errorMiddleware(error: any, request: Request, response: Response): void {
  logger.error(error);
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';

  if (error instanceof ApiError) {
    response.status(status).send({
      status,
      message,
    });

    return;
  }
  response.status(status).send({
    status,
    message,
  });
}
