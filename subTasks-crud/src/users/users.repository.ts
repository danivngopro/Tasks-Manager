import { User } from './users.interface';
import { UserModel } from './users.model';

export class UserRepository {
  static create(newUser: User): Promise<User> {
    return UserModel.create(newUser);
  }
  
  static updateByusername(username: string, updatedData: Partial<User>, forToken: boolean): Promise<User | null> {
    return UserModel.findOneAndUpdate({ username }, updatedData, { new: true }).select(forToken && { username: 1 }).exec();
  }

  static getUserByusername(username: string): Promise<User | null> {
    return UserModel.findOne({ username }).exec();
  }

  static deleteUserByUsername(username: string): Promise<User | null> {
    return UserModel.findOneAndDelete({ username }).exec();
  }
}
