/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserRepository } from './users.repository';
import { UserNotFound } from '../utils/errors/user';
import { User } from './users.interface';

export class UserManager {
  static async create(newUser: User): Promise<User> {
    return UserRepository.create(newUser);
  }

  static async updateByArmyId(
    armyId: string,
    updatedData: Partial<User>,
    query: { forToken: boolean },
  ): Promise<User> {
    const user = await UserRepository.updateByArmyId(
      armyId,
      updatedData,
      query.forToken,
    );
    if (!user) throw new UserNotFound();
    return user;
  }

  static async getUserByArmyId(armyId: string): Promise<User> {
    const user = await UserRepository.getUserByArmyId(armyId);
    if (!user) throw new UserNotFound();
    return user;
  }

  static async validateQuestion(
    armyId: string,
    questionId: string,
    answer: string,
  ): Promise<boolean> {
    const user = await UserRepository.getUserByArmyId(armyId);
    return user!.validationQuestions.some((question) => question.questionId === questionId && question.answer === answer);
  }
}
