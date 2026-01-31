import Joi from "joi";

export const createTransportSchema = Joi.object({
        branch: Joi.string().required(),
        model: Joi.string().required(),
        color: Joi.string().required(),
        price: Joi.number().min(0).required()   
    });

export const updateTransportSchema = Joi.object({
        branch: Joi.string(),
        model: Joi.string(),
        color: Joi.string(),
        price: Joi.number()   
    }).min(1);
