import Joi from "joi";



export const createBrancheSchema = Joi.object({
        name: Joi.string().required(),
        address: Joi.string().required()
    });
    
export const updateBrancheSchema = Joi.object({
        name: Joi.string(),
        address: Joi.string()
    }).min(1);
