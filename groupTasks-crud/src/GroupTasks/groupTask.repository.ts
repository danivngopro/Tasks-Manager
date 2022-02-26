import { GroupTask } from './groupTask.interface';
import { groupTaskModel } from './groupTask.model';

export class GroupTaskRepository {
  static create(newgroupTask: GroupTask): Promise<GroupTask> {
    return groupTaskModel.create(newgroupTask);
  }
  
  static updateByid(id: string, updatedData: Partial<GroupTask>, forToken: boolean): Promise<GroupTask | null> {
    return groupTaskModel.findOneAndUpdate({ id }, updatedData, { new: true }).select(forToken && { id: 1 }).exec();
  }

  static getgroupTaskByid(id: string): Promise<GroupTask | null> {
    return groupTaskModel.findOne({ id }).exec();
  }

  static deletegroupTaskByid(id: string): Promise<GroupTask | null> {
    return groupTaskModel.findOneAndDelete({ id }).exec();
  }

  static getHierarchy(id: string): Promise<GroupTask | null> {
    return groupTaskModel.findOne({ id }).exec();
  }
}
