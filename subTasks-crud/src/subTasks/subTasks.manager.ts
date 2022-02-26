/* eslint-disable @typescript-eslint/no-unused-vars */
import { SubTaskRepository } from './subTasks.repository';
import { SubTaskNotFound } from '../utils/errors/subTask';
import { SubTask } from './subTasks.interface';

export class SubTaskManager {
  static async create(newsubTask: SubTask): Promise<SubTask> {
    return SubTaskRepository.create(newsubTask);
  }

  static async updateByid(
    id: string,
    updatedData: Partial<SubTask>,
    query: { forToken: boolean },
  ): Promise<SubTask> {
    const subTask = await SubTaskRepository.updateByid(
      id,
      updatedData,
      query.forToken,
    );
    if (!subTask) throw new SubTaskNotFound();
    return subTask;
  }

  static async getsubTaskByid(id: string): Promise<SubTask> {
    const subTask = await SubTaskRepository.getsubTaskByid(id);
    if (!subTask) throw new SubTaskNotFound();
    return subTask;
  }

  static async deleteByid(
    id: string,
  ): Promise<SubTask> {
    const subTask = await SubTaskRepository.deletesubTaskByid(id);
    if (!subTask) throw new SubTaskNotFound();
    return subTask; 
  }
}
