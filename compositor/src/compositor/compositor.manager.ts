import { PostTypeError } from '../utils/errors/compositor';
import GroupTaskService from '../utils/services/groupTask.service';
import SubTaskService from '../utils/services/subtask.service';
import TaskService from '../utils/services/task.service';
import UserService from '../utils/services/user.service';

export class CompositorManager {
  static async create(newBody, postType: Number): Promise<any> {
    console.log(postType)
    switch (postType) {
      case 1:
        console.log('trying to create new user');
        return UserService.create({}, newBody);
      case 2:
        return GroupTaskService.create({}, newBody);
      case 3:
        return TaskService.create({}, newBody);
      case 4:
        return SubTaskService.create({}, newBody);
      default:
        throw new PostTypeError();
    }
  }
}
