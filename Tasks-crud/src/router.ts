import { Router } from 'express';
import { taskRouter } from './Tasks/tasks.router';

const AppRouter: Router = Router();

AppRouter.use('/api/tasks', taskRouter);

AppRouter.use('/isalive', (_req, res) => {
  res.status(200).send('alive');
});

AppRouter.use('*', (_req, res) => {
  res.status(404).send('Invalid Route');
});

export { AppRouter };
