/* eslint-disable @typescript-eslint/no-unused-vars */
import { TaskRepository } from './tasks.repository';
import { TaskNotFound } from '../utils/errors/task';
import { Task } from './tasks.interface';

export class TaskManager {
  static async create(newtask: Task): Promise<Task> {
    return TaskRepository.create(newtask);
  }

  static async updateByid(
    id: string,
    updatedData: Partial<Task>,
    query: { forToken: boolean },
  ): Promise<Task> {
    const task = await TaskRepository.updateByid(
      id,
      updatedData,
      query.forToken,
    );
    if (!task) throw new TaskNotFound();
    return task;
  }

  static async gettaskByid(id: string): Promise<Task> {
    const task = await TaskRepository.gettaskByid(id);
    if (!task) throw new TaskNotFound();
    return task;
  }

  static async deleteByid(
    id: string,
  ): Promise<Task> {
    const task = await TaskRepository.deletetaskByid(id);
    if (!task) throw new TaskNotFound();
    return task; 
  }
}
