/* eslint-disable @typescript-eslint/no-unused-vars */
import { CompositorRepository } from './compositor.repository';

export class CompositorManager {
  static async create(newcompositor): Promise<Compositor> {
    return CompositorRepository.create(newcompositor);
  }
}
