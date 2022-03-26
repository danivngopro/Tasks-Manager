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
/* istanbul ignore next */
export class TasknameInvalidError extends TaskError {
  constructor(message = 'taskname is invalid') {
    super(message, 400);
  }
}
export class TaskNotFound extends TaskError {
  constructor() {
    super('task not found', 404);
  }
}