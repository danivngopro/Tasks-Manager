import * as Joi from 'joi-oid';


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
