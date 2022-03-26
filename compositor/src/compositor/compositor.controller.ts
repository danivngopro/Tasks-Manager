import { Request, Response } from 'express';
import { CompositorManager } from './compositor.manager';

export class CompositorController {
  static async create(req: Request, res: Response): Promise<void> {
    const { postType } = req.params;
    res.json(await CompositorManager.create(req.body, parseInt(postType)));
  }
}
//xd
