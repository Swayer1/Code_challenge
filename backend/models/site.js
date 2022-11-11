const Joi = require("joi");

function validateSite(site) {
  const schema = {
    name: Joi.string().min(0).max(50),
    description: Joi.string().min(0).max(50),
    id: Joi.number().min(0).required(),
    region: Joi.string().min(0).max(50),
    country: Joi.string().min(0).max(50),
    turbines: Joi.array().item(
      Joi.object({
        id: Joi.number().min(0).required(),
        name: Joi.string().min(0).max(50),
        manufacturer: Joi.string().min(0).max(50),
        version: Joi.number().min(0).required(),
        maxProduction: Joi.number().min(0).required(),
        currentProduction: Joi.number().min(0).required(),
        windspeed: Joi.number().min(0).required(),
        windDirection: Joi.string().min(0).max(50),
      })
    ),
  };

  return Joi.validate(site, schema);
}

module.exports = validateSite;
