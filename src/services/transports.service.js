import { Transports } from "../models/transports.model.js"
import { Branches } from "../models/branches.model.js"
import { NotFoundError,BadRequestError } from "../utils/error.js"

class transportsService {
    constructor() { }

    async addTransport(body) {
        const { branch, model, color, img, price } = body

        const find_branch = await Branches.findOne({ name: branch })

        if (!find_branch) {
            throw new NotFoundError(404,"Branch not found")
        }

        await Transports.create({ branch: find_branch.id, model, color, img, price })
    }

    async transport() {
        const transports = await Transports.find()
        return transports
    }

    async deleteTransport(params) {
        const { id } = params

        const serachId = await Transports.findById(id)
        if (!serachId) {
            throw new NotFoundError(404,"ID not found")
        }
        const deletedTransport = await Transports.findByIdAndDelete(id)

        return deletedTransport
    }

    async updateTransport(params, body) {
        const { id } = params

        if (body?.branch) {
            const branch_id = await Branches.findOne({ name: body.branch })
            body.branch = branch_id.id
        }

        const serachId = await Transports.findById(id)
        if (!serachId) {
            throw new NotFoundError(404,"ID not found")
        }

        const updatedTansport = await Transports.findByIdAndUpdate(id, body, { new: true })

        return updatedTansport
    }
}



export default new transportsService()