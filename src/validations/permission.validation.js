import Joi from "joi";


export const createPermissionSchema = Joi.object({
        StaffId: Joi.string().required(),
        permissionModel: Joi.string().valid('Branches', 'Transports', 'Staffs', 'Admins','Permissons').required(),
        action:  Joi.array().items(Joi.string().valid('GET','POST','PUT','DELETE')).default(['GET'])
    });
export const updatePermissionSchema = Joi.object({
        StaffId: Joi.string(),
        permissionModel: Joi.string().valid('Branches', 'Transports', 'Staffs', 'Admins','Permissons'),
        action: Joi.array().items(Joi.string().valid('GET', 'POST', 'PUT', 'DELETE'))
    }).min(1);