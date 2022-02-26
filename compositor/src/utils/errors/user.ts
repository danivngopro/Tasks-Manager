import { CompositorError } from './errors';

export class ValidationError extends CompositorError {
  constructor() {
    /* istanbul ignore next */
    super('Validation error', 400);
  }
}

export class IdInvalidError extends CompositorError {
  /* istanbul ignore next */
  constructor(message = 'Id is invalid') {
    super(message, 400);
  }
}
/* istanbul ignore next */
export class CompositornameInvalidError extends CompositorError {
  constructor(message = 'compositor is invalid') {
    super(message, 400);
  }
}
export class CompositorNotFound extends CompositorError {
  constructor() {
    super('compositor not found', 404);
  }
}