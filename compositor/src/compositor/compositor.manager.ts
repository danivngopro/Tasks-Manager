/* eslint-disable @typescript-eslint/no-unused-vars */
import { PostTypeError } from '../utils/errors/compositor';
import UserService from '../utils/services/user.service';

export class CompositorManager {
  static async create(newBody, postType): Promise<any> {
    switch (postType) {
      case 1:
        return UserService.create({}, newBody);
      case 2:
        return UserService.create({}, newBody);
      case 3:
        return UserService.create({}, newBody);
      case 4:
        return UserService.create({}, newBody);
      default:
        throw new PostTypeError();
    }
  }
}
