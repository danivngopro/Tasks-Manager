import { Request, Response } from 'express';
import { UserManager } from './users.manager';

export class UserController {
  static async create(req: Request, res: Response): Promise<void> {
    res.json(await UserManager.create(req.body));
  }

  static async updateByArmyId(req: Request, res: Response): Promise<void> {
    res.json(await UserManager.updateByArmyId(req.params.armyId, req.body, req.query as any));
  }

  static async getByArmyId(req: Request, res: Response): Promise<void> {
    const { armyId } = req.params;
    res.json(await UserManager.getUserByArmyId(armyId));
  }

  static async validateQuestion(req: Request, res: Response): Promise<void> {
    const { armyId } = req.params;
    const questionId = req.query.questionId as string;
    const answer = req.query.answer as string;
    res.json(await UserManager.validateQuestion(armyId, questionId, answer));
  }
}
