import { Router } from 'express';
import { groupTaskRouter } from './GroupTasks/groupTask.router';

const AppRouter: Router = Router();

AppRouter.use('/api/groupTask', groupTaskRouter);

AppRouter.use('/isalive', (_req, res) => {
  res.status(200).send('alive');
});

AppRouter.use('*', (_req, res) => {
  res.status(404).send('Invalid Route');
});

export { AppRouter };
