import { Request, Response } from 'express';
import { GroupTaskManager } from './groupTask.manager';

export class GroupTaskController {
  static async create(req: Request, res: Response): Promise<void> {
    res.json(await GroupTaskManager.create(req.body));
  }

  static async updateByid(req: Request, res: Response): Promise<void> {
    res.json(await GroupTaskManager.updateByid(req.params.id, req.body, req.query as any));
  }

  static async getByid(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    res.json(await GroupTaskManager.getgroupTaskByid(id));
  }

  static async deleteByid(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    res.json(await GroupTaskManager.deleteByid(id));
  }

  static async getHierarchy(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    res.json(await GroupTaskManager.getHierarchy(id));
  }
}
