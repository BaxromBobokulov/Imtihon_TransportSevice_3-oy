import { updateStaffSchema, staffSchema } from "../validations/staffs.validation.js"
import { BadRequestError } from "../utils/error.js"


class validationStaff {
    constructor() { }

    addStaff = (req, res, next) => {
        try {
            const { error } = staffSchema.validate(req.body)
            if (error) {
                throw new BadRequestError(400, error.details[0].message)
            }
            next()
        } catch (error) {
            next()
        }
    }
    updateStaff = (req, res, next) => {
        try {
            const { error } = updateStaffSchema.validate(req.body)
            if (error) {
                throw new BadRequestError(400, error.details[0].message)
            }
            next()
        } catch (error) {
            next()
        }
    }
}

export default new validationStaff()



