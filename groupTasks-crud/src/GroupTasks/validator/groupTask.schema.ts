import * as Joi from 'joi-oid';

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
