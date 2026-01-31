import { createBrancheSchema,updateBrancheSchema } from "../validations/branch.validation.js"
import { BadRequestError } from "../utils/error.js"


class validationBranch {
    constructor() { }

    addBranch = (req, res, next) => {
        try {
            const { error } = createBrancheSchema.validate(req.body)
            if (error) {
                throw new BadRequestError(400, error.details[0].message)
            }
            next()
        } catch (error) {
            next()
        }
    }
    updateBranch = (req, res, next) => {
        try {
            const { error } = updateBrancheSchema.validate(req.body)
            if (error) {
                throw new BadRequestError(400, error.details[0].message)
            }
            next()
        } catch (error) {
            next()
        }
    }
}

export default new validationBranch()



