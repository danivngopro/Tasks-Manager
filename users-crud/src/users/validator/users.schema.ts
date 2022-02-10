import * as Joi from 'joi';
import { PermissionType } from '../users.interface';

const armyIdSchema = {
  armyId: Joi.string().regex(/^\d+$/).required(),
};

const questionSchema = Joi.object({
  questionId: Joi.string().required(),
  answer: Joi.string().required(),
});

export const UserSchema = Joi.object({
  armyId: Joi.string().regex(/^\d+$/).required(),
  firstName: Joi.string().default(''),
  lastName: Joi.string().default(''),
  permissions: Joi.array().items(Joi.string().valid(...Object.values(PermissionType))),
  validationQuestions: Joi.array().items({
    questionId: Joi.string().required(),
    answer: Joi.string().required(),
  }).length(3),
});

export const createUserReqSchema = Joi.object({
  body: UserSchema,
  query: {},
  params: {},
});

export const getByArmyIdReqSchema = Joi.object({
  body: {},
  query: {},
  params: armyIdSchema,
});

export const validateQuestionReqScehma = Joi.object({
  body: {},
  query: questionSchema,
  params: armyIdSchema,
});

export const updateByArmyIdReqSchema = Joi.object({
  body: UserSchema,
  query: {},
  params: armyIdSchema,
});
