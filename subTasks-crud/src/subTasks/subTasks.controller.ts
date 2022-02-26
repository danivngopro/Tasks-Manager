import { Request, Response } from 'express';
import { SubTaskManager } from './subTasks.manager';

export class SubTaskController {
  static async create(req: Request, res: Response): Promise<void> {
    res.json(await SubTaskManager.create(req.body));
  }

  static async updateByid(req: Request, res: Response): Promise<void> {
    res.json(await SubTaskManager.updateByid(req.params.id, req.body, req.query as any));
  }

  static async getByid(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    res.json(await SubTaskManager.getsubTaskByid(id));
  }

  static async deleteByid(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    res.json(await SubTaskManager.deleteByid(id));
  }
}
