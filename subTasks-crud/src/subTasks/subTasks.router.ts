import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ValidateRequest } from '../utils/joi';
import { SubTaskController } from './subTasks.controller';
import {
  createsubTaskReqSchema,
  updateBysubTaskNameSchema,
  getBysubTaskNameScema,
} from './validator/subTasks.schema';

const subTasksRouter: Router = Router();

subTasksRouter.post('/', ValidateRequest(createsubTaskReqSchema), wrapAsync(SubTaskController.create));
subTasksRouter.get('/id/:id', ValidateRequest(getBysubTaskNameScema), wrapAsync(SubTaskController.getByid));
subTasksRouter.put('/id/:id', ValidateRequest(updateBysubTaskNameSchema), wrapAsync(SubTaskController.updateByid));
subTasksRouter.delete('/id/:id', ValidateRequest(getBysubTaskNameScema), wrapAsync(SubTaskController.deleteByid));

export { subTasksRouter as subTaskRouter };
