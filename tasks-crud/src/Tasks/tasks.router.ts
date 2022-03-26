import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ValidateRequest } from '../utils/joi';
import { TaskController } from './tasks.controller';
import {
  createtaskReqSchema,
  updateBytaskNameSchema,
  getBytaskNameScema,
} from './validator/tasks.schema';

const tasksRouter: Router = Router();

tasksRouter.post('/', ValidateRequest(createtaskReqSchema), wrapAsync(TaskController.create));
tasksRouter.get('/id/:id', ValidateRequest(getBytaskNameScema), wrapAsync(TaskController.getByid));
tasksRouter.get('/getHierarchy/id/:id', ValidateRequest(getBytaskNameScema), wrapAsync(TaskController.getHierarchy));
tasksRouter.put('/id/:id', ValidateRequest(updateBytaskNameSchema), wrapAsync(TaskController.updateByid));
tasksRouter.delete('/id/:id', ValidateRequest(getBytaskNameScema), wrapAsync(TaskController.deleteByid));

export { tasksRouter as taskRouter };
