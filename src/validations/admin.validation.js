import Joi from "joi";


export const adminSchema = Joi.object({
        branch: Joi.string().required(),
        username: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(6).required(),
        birthdate: Joi.string().required(),    
        gender: Joi.string().valid("Male", "Female").required(),
        role: Joi.string().valid('admin', 'superadmin').default('admin'),
    });

export const updateAdminSchema = Joi.object({
        branch: Joi.string(),
        username: Joi.string().min(3).max(30),
        password: Joi.string().min(6),
        email: Joi.string().email(),
        birthdate: Joi.string(),
        gender: Joi.string().valid('Male', 'Female'),
        role: Joi.string().valid('admin', 'superadmin').default('admin') 
    }).min(1);
