import { SubTaskError } from './errors';

export class ValidationError extends SubTaskError {
  constructor() {
    /* istanbul ignore next */
    super('Validation error', 400);
  }
}

export class IdInvalidError extends SubTaskError {
  /* istanbul ignore next */
  constructor(message = 'Id is invalid') {
    super(message, 400);
  }
}

export class SubTaskNotFound extends SubTaskError {
  constructor() {
    super('SubTask not found', 404);
  }
}