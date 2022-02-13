import * as Joi from 'joi';

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
