import { Request, Response } from 'express';
import { UserManager } from './users.manager';

export class UserController {
  static async create(req: Request, res: Response): Promise<void> {
    res.json(await UserManager.create(req.body));
  }

  static async updateByUsername(req: Request, res: Response): Promise<void> {
    res.json(await UserManager.updateByUsername(req.params.username, req.body, req.query as any));
  }

  static async getByUsername(req: Request, res: Response): Promise<void> {
    const { username } = req.params;
    res.json(await UserManager.getUserByUsername(username));
  }

  static async deleteByUsername(req: Request, res: Response): Promise<void> {
    const { username } = req.params;
    res.json(await UserManager.deleteByUsername(username));
  }
}
