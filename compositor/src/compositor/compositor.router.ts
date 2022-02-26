import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { CompositorController } from './compositor.controller';

const compositorRouter: Router = Router();

compositorRouter.post('/', wrapAsync(CompositorController.create));

export { compositorRouter as compositorRouter };
