/* eslint-disable @typescript-eslint/no-unused-vars */
import { GroupTaskRepository } from './groupTask.repository';
import { HeirarchyNotFound, GroupTaskNotFound } from '../utils/errors/groupTask';
import { GroupTask } from './groupTask.interface';

export class GroupTaskManager {
  static async create(newgroupTask: GroupTask): Promise<GroupTask> {
    return GroupTaskRepository.create(newgroupTask);
  }

  static async updateByid(
    id: string,
    updatedData: Partial<GroupTask>,
    query: { forToken: boolean },
  ): Promise<GroupTask> {
    const groupTask = await GroupTaskRepository.updateByid(
      id,
      updatedData,
      query.forToken,
    );
    if (!groupTask) throw new GroupTaskNotFound();
    return groupTask;
  }

  static async getgroupTaskByid(id: string): Promise<GroupTask> {
    const groupTask = await GroupTaskRepository.getgroupTaskByid(id);
    if (!groupTask) throw new GroupTaskNotFound();
    return groupTask;
  }

  static async deleteByid(
    id: string,
  ): Promise<GroupTask> {
    const groupTask = await GroupTaskRepository.deletegroupTaskByid(id);
    if (!groupTask) throw new GroupTaskNotFound();
    return groupTask; 
  }

  static async getHierarchy(id: string): Promise<Array<string>> {
    const groupTask = await GroupTaskRepository.getHierarchy(id);
    if (!groupTask) throw new HeirarchyNotFound();
    return groupTask.tasks;
  }
}
