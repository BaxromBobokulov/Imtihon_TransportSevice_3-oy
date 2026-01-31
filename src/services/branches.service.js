import { Branches } from "../models/branches.model.js"
import { NotFoundError, BadRequestError } from "../utils/error.js"


class branchesService {
    constructor() { }

    async branches() {
        const branches = await Branches.find()
        return branches
    }

    async getBranchById(params) {
        const { id } = params

        const serachId = await Branches.findById(id)
        if (!serachId) {
            throw new NotFoundError(404,"ID not found")
        }

        const admin = await Branches.findById(id)
        return admin
    }

    async addBranch(body) {
        const { name, address } = body

        const branches = await Branches.create({ name, address })
        return branches
    }

    async deleteBranch(params) {
        const { id } = params

        const serachId = await Branches.findById(id)
        if (!serachId) {
            throw new NotFoundError(404,"ID not found")
        }
        const deletedBranch = await Branches.findByIdAndDelete(id)

        return deletedBranch
    }

    async updateBranch(params, body) {
        const { id } = params

        const serachId = await Branches.findById(id)
        if (!serachId) {
            throw new NotFoundError(404,"ID not found")
        }

        const updatedBranch = await Branches.findByIdAndUpdate(id, body, { new: true })

        return updatedBranch
    }

}



export default new branchesService()