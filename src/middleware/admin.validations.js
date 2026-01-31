import { adminSchema, updateAdminSchema } from "../validations/admin.validation.js"
import { BadRequestError } from "../utils/error.js"


class validationAdmin {
    constructor() { }

    addAdmin = (req, res, next) => {
        try {
            const { error } = adminSchema.validate(req.body)
            if (error) {
                throw new BadRequestError(400, error.details[0].message)
            }
            next()
        } catch (error) {
            next()
        }
    }

    updateAdmin = (req, res, next) => {
        try {
            const { error } = updateAdminSchema.validate(req.body)
            if (error) {
                throw new BadRequestError(400, error.details[0].message)
            }
            next()
        } catch (error) {
            next()
        }
    }
}

export default new validationAdmin()



