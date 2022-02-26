import { Task } from './tasks.interface';
import { taskModel } from './tasks.model';

export class TaskRepository {
  static create(newtask: Task): Promise<Task> {
    return taskModel.create(newtask);
  }
  
  static updateByid(id: string, updatedData: Partial<Task>, forToken: boolean): Promise<Task | null> {
    return taskModel.findOneAndUpdate({ id }, updatedData, { new: true }).select(forToken && { id: 1 }).exec();
  }

  static gettaskByid(id: string): Promise<Task | null> {
    return taskModel.findOne({ id }).exec();
  }

  static deletetaskByid(id: string): Promise<Task | null> {
    return taskModel.findOneAndDelete({ id }).exec();
  }

  static getHierarchy(id: string): Promise<Task | null> {
    return taskModel.findOne({ id }).exec();
  }
}
