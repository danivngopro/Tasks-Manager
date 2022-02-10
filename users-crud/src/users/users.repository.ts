import { User } from './users.interface';
import { UserModel } from './users.model';

export class UserRepository {
  static create(newUser: User): Promise<User> {
    return UserModel.create(newUser);
  }
  
  static updateByArmyId(armyId: string, updatedData: Partial<User>, forToken: boolean): Promise<User | null> {
    return UserModel.findOneAndUpdate({ armyId }, updatedData, { new: true }).select(forToken && { armyId: 1 }).exec();
  }

  static getUserByArmyId(armyId: string): Promise<User | null> {
    return UserModel.findOne({ armyId }).exec();
  }
}
