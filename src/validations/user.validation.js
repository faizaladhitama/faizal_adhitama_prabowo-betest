const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    identityNumber: Joi.string().required(),
    accountNumber: Joi.string().required(),
    emailAddress: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    userName: Joi.string().required(),
    role: Joi.string().required().valid('user', 'admin'),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    userName: Joi.string().optional(),
    role: Joi.string().optional(),
    identityNumber: Joi.string().optional(),
    accountNumber: Joi.string().optional(),
    emailAddress: Joi.string().optional(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
    accountNumber: Joi.string(),
    identityNumber: Joi.string(),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      emailAddress: Joi.string().email(),
      password: Joi.string().custom(password),
      userName: Joi.string(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
