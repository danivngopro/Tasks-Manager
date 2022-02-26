import { Request, Response } from 'express';
import { TaskManager } from './tasks.manager';

export class TaskController {
  static async create(req: Request, res: Response): Promise<void> {
    res.json(await TaskManager.create(req.body));
  }

  static async updateByid(req: Request, res: Response): Promise<void> {
    res.json(await TaskManager.updateByid(req.params.id, req.body, req.query as any));
  }

  static async getByid(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    res.json(await TaskManager.gettaskByid(id));
  }

  static async deleteByid(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    res.json(await TaskManager.deleteByid(id));
  }
}
