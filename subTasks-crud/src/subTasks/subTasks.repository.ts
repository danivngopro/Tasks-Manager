import { SubTask } from './subTasks.interface';
import { subTaskModel } from './subTasks.model';

export class SubTaskRepository {
  static create(newsubTask: SubTask): Promise<SubTask> {
    return subTaskModel.create(newsubTask);
  }
  
  static updateByid(id: string, updatedData: Partial<SubTask>, forToken: boolean): Promise<SubTask | null> {
    return subTaskModel.findOneAndUpdate({ id }, updatedData, { new: true }).select(forToken && { id: 1 }).exec();
  }

  static getsubTaskByid(id: string): Promise<SubTask | null> {
    return subTaskModel.findOne({ id }).exec();
  }

  static deletesubTaskByid(id: string): Promise<SubTask | null> {
    return subTaskModel.findOneAndDelete({ id }).exec();
  }
}
