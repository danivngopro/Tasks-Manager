import { TaskError } from './errors';

export class ValidationError extends TaskError {
  constructor() {
    /* istanbul ignore next */
    super('Validation error', 400);
  }
}

export class IdInvalidError extends TaskError {
  /* istanbul ignore next */
  constructor(message = 'Id is invalid') {
    super(message, 400);
  }
}

export class TaskNotFound extends TaskError {
  constructor() {
    super('Task not found', 404);
  }
}