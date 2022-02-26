import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ValidateRequest } from '../utils/joi';
import { GroupTaskController } from './groupTask.controller';
import {
  creategroupTaskReqSchema,
  updateBygroupTaskSchema,
  getBygroupTaskScema,
} from './validator/groupTask.schema';

const groupTaskRouter: Router = Router();

groupTaskRouter.post('/', ValidateRequest(creategroupTaskReqSchema), wrapAsync(GroupTaskController.create));
groupTaskRouter.get('/id/:id', ValidateRequest(getBygroupTaskScema), wrapAsync(GroupTaskController.getByid));
groupTaskRouter.get('/getHierarchy/id/:id', ValidateRequest(getBygroupTaskScema), wrapAsync(GroupTaskController.getHierarchy));
groupTaskRouter.put('/id/:id', ValidateRequest(updateBygroupTaskSchema), wrapAsync(GroupTaskController.updateByid));
groupTaskRouter.delete('/id/:id', ValidateRequest(getBygroupTaskScema), wrapAsync(GroupTaskController.deleteByid));

export { groupTaskRouter as groupTaskRouter };
