import { createTransportSchema,updateTransportSchema } from "../validations/transport.validation.js"
import { BadRequestError } from "../utils/error.js"


class validationTransport {
    constructor() { }

    addTransport = (req, res, next) => {
        try {
            const { error } = createTransportSchema.validate(req.body)
            if (error) {
                throw new BadRequestError(400, error.details[0].message)
            }
            next()
        } catch (error) {
            next()
        }
    }

    updateTransport = (req, res, next) => {
        try {
            const { error } = updateTransportSchema.validate(req.body)
            if (error) {
                throw new BadRequestError(400, error.details[0].message)
            }
            next()
        } catch (error) {
            next()
        }
    }
}

export default new validationTransport()



