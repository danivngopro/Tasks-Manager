import { Router } from 'express';
import { subTaskRouter } from './subTasks/subTasks.router';

const AppRouter: Router = Router();

AppRouter.use('/api/subTasks', subTaskRouter);

AppRouter.use('/isalive', (_req, res) => {
  res.status(200).send('alive');
});

AppRouter.use('*', (_req, res) => {
  res.status(404).send('Invalid Route');
});

export { AppRouter };
