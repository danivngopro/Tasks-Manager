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
