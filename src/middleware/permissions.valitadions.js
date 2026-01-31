import { createPermissionSchema,updatePermissionSchema } from "../validations/permission.validation.js"
import { BadRequestError } from "../utils/error.js"


class validationPermission {
    constructor() { }

    addPermission = (req, res, next) => {
        try {
            const { error } = createPermissionSchema.validate(req.body)
            if (error) {
                throw new BadRequestError(400, error.details[0].message)
            }
            next()
        } catch (error) {
            next()
        }
    }

    updatePermission = (req, res, next) => {
        try {
            const { error } = updatePermissionSchema.validate(req.body)
            if (error) {
                throw new BadRequestError(400, error.details[0].message)
            }
            next()
        } catch (error) {
            next()
        }
    }
}

export default new validationPermission()



