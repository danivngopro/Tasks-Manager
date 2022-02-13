import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ValidateRequest } from '../utils/joi';
import { UserController } from './users.controller';
import {
  createUserReqSchema,
  getByUserNameScema,
  updateByUserNameSchema,
} from './validator/users.schema';

const UserRouter: Router = Router();

UserRouter.post('/', ValidateRequest(createUserReqSchema), wrapAsync(UserController.create));
UserRouter.get('/username/:username', ValidateRequest(getByUserNameScema), wrapAsync(UserController.getByUsername));
UserRouter.put('/username/:username', ValidateRequest(updateByUserNameSchema), wrapAsync(UserController.updateByUsername));
UserRouter.delete('/username/:username', ValidateRequest(getByUserNameScema), wrapAsync(UserController.deleteByUsername));

export { UserRouter };
