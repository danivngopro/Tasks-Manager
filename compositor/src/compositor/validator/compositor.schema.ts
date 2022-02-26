import * as Joi from 'joi-oid';

const taskschema = Joi.object({
  taskName: Joi.string().default(''),
  content: Joi.string().default(''),
  subTasks: Joi.array().items(Joi.objectId()),
});

export const createtaskReqSchema = Joi.object({
  body: taskschema,
  query: {},
  params: {},
});

const taskIdSchema = {
  id: Joi.objectId(),
};

export const updateBytaskNameSchema = Joi.object({
  body: taskschema,
  query: {},
  params: taskIdSchema,
});

export const getBytaskNameScema = Joi.object({
  body: {},
  query: {},
  params: taskIdSchema,
});

const groupTaskchema = Joi.object({
  groupTaskName: Joi.string().default(''),
  content: Joi.string().default(''),
  tasks: Joi.array().items(Joi.objectId()),
});

export const creategroupTaskReqSchema = Joi.object({
  body: groupTaskchema,
  query: {},
  params: {},
});

const groupTaskIdSchema = {
  id: Joi.objectId(),
};

export const updateBygroupTaskSchema = Joi.object({
  body: groupTaskchema,
  query: {},
  params: groupTaskIdSchema,
});

export const getBygroupTaskScema = Joi.object({
  body: {},
  query: {},
  params: groupTaskIdSchema,
});

const subTaskschema = Joi.object({
  content: Joi.string().default(''),
});

export const createsubTaskReqSchema = Joi.object({
  body: subTaskschema,
  query: {},
  params: {},
});

const subTaskIdSchema = {
  id: Joi.objectId(),
};

export const updateBysubTaskNameSchema = Joi.object({
  body: subTaskschema,
  query: {},
  params: subTaskIdSchema,
});

export const getBysubTaskNameScema = Joi.object({
  body: {},
  query: {},
  params: subTaskIdSchema,
});

const UserSchema = Joi.object({
  firstName: Joi.string().default(''),
  lastName: Joi.string().default(''),
  username: Joi.string().default(''),
  email: Joi.string().regex(/^\S+@\S+\.\S+$/).default(''),
  password: Joi.string().default(''),
});

export const createUserReqSchema = Joi.object({
  body: UserSchema,
  query: {},
  params: {},
});

const usernameSchema = {
  username: Joi.string().required().min(3).max(12),
};

export const updateByUserNameSchema = Joi.object({
  body: UserSchema,
  query: {},
  params: usernameSchema,
});

export const getByUserNameScema = Joi.object({
  body: {},
  query: {},
  params: usernameSchema,
});
