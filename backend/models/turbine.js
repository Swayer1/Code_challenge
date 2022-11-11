const Joi = require("joi");

function validateTurbine(turbine) {
  const schema = {
    id: Joi.number().min(0).required(),
    name: Joi.string().min(0).max(50),
    manufacturer: Joi.string().min(0).max(50),
    version: Joi.number().min(0).required(),
    maxProduction: Joi.number().min(0).required(),
    currentProduction: Joi.number().min(0).required(),
    windspeed: Joi.number().min(0).required(),
    windDirection: Joi.string().min(0).max(50),
  };

  return Joi.validate(turbine, schema);
}

module.exports = validateTurbine;
