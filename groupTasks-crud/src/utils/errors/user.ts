import { GroupTaskError } from './errors';

export class ValidationError extends GroupTaskError {
  constructor() {
    /* istanbul ignore next */
    super('Validation error', 400);
  }
}

export class IdInvalidError extends GroupTaskError {
  /* istanbul ignore next */
  constructor(message = 'Id is invalid') {
    super(message, 400);
  }
}
/* istanbul ignore next */
export class GroupTasknameInvalidError extends GroupTaskError {
  constructor(message = 'groupTask is invalid') {
    super(message, 400);
  }
}
export class GroupTaskNotFound extends GroupTaskError {
  constructor() {
    super('groupTask not found', 404);
  }
}