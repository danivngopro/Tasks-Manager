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

export class CompositorNotFound extends CompositorError {
  constructor() {
    super('Compositor not found', 404);
  }
}

export class PostTypeError extends CompositorError {
  constructor() {
    super('postType must be between 1 and 4', 404);
  }
}

export class HeirarchyNotFound extends CompositorError {
  constructor() {
    super('Heirarchy not found', 404);
  }
}