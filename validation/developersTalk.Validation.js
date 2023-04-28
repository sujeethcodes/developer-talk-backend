const Joi = require("joi");

const validation = {};

validation.phoneNumber = Joi.object().keys({
  phoneNumber: Joi.number().required(),
});

validation.email = Joi.object().keys({
  email: Joi.string().required(),
});

module.exports = validation;
