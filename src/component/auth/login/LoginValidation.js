import Joi from "joi";

export default Joi.object().keys({
    'username': Joi.string().required().max(100).min(3).messages({
        'string.min': 'Name must have at least {#limit} characters',
        'string.max': 'Name must have at most 100 characters',
        'string.empty': 'Name can not be empty'
    }),
    'password': Joi.string().required().max(100).min(3).messages({
        'string.min': 'Name must have at least {#limit} characters',
        'string.max': 'Name must have at most 100 characters',
        'string.empty': 'Name can not be empty'
    })
})