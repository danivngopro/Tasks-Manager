import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ValidateRequest } from '../utils/joi';
import { UserController } from './users.controller';
import {
  createUserReqSchema,
  updateByArmyIdReqSchema,
  getByArmyIdReqSchema,
  validateQuestionReqScehma,
} from './validator/users.schema';

const UserRouter: Router = Router();

UserRouter.post('/', ValidateRequest(createUserReqSchema), wrapAsync(UserController.create));
UserRouter.put('/army-id/:armyId', ValidateRequest(updateByArmyIdReqSchema), wrapAsync(UserController.updateByArmyId));
UserRouter.get('/army-id/:armyId', ValidateRequest(getByArmyIdReqSchema), wrapAsync(UserController.getByArmyId));
UserRouter.get('/validate-question/:armyId', ValidateRequest(validateQuestionReqScehma), wrapAsync(UserController.validateQuestion));

export { UserRouter };
