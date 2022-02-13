/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserRepository } from './users.repository';
import { UserNotFound } from '../utils/errors/user';
import { User } from './users.interface';

export class UserManager {
  static async create(newUser: User): Promise<User> {
    return UserRepository.create(newUser);
  }

  static async updateByUsername(
    username: string,
    updatedData: Partial<User>,
    query: { forToken: boolean },
  ): Promise<User> {
    const user = await UserRepository.updateByusername(
      username,
      updatedData,
      query.forToken,
    );
    if (!user) throw new UserNotFound();
    return user;
  }

  static async getUserByUsername(username: string): Promise<User> {
    const user = await UserRepository.getUserByusername(username);
    if (!user) throw new UserNotFound();
    return user;
  }

  static async deleteByUsername(
    username: string,
  ): Promise<User> {
    const user = await UserRepository.deleteUserByUsername(username);
    if (!user) throw new UserNotFound();
    return user; 
  }
}
