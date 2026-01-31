import { Mongoose } from "mongoose"
import { Admins } from "../models/admins.modul.js"
import { Branches } from "../models/branches.model.js"
import { hashPass } from "../utils/bcrypt.js"
import { createToken } from "../utils/token.js"
import { BadRequestError, NotFoundError } from "../utils/error.js"

class adminsService {
    constructor() { }

    async admins() {
        const admins = Admins.find()
        return admins
    }

    async getAdminById(params) {
        const { id } = params

        const serachId = await Admins.findById(id)
        if (!serachId) {
            throw new NotFoundError(404,"ID not found")
        }

        const admin = await Admins.findById(id)
        return admin
    }

    async addAdmin(body) {
        const { username, branch, password, re_password, birthdate, gender, role } = body

        if (password !== re_password) {
            throw new BadRequestError(400,"Wrong password")
        }
        const find_branch = await Branches.findOne({ name: branch })

        if (!find_branch) {
            throw new NotFoundError(404,"Branch not found")
        }
        const ready_pass = await hashPass(password)

        const PostedStaff = await Admins.create({ branch: find_branch.id, username, password: ready_pass, birth_date: birthdate, gender, role })
        return createToken(PostedStaff._id,username)
    }

    async deleteAdmin(params) {
        const { id } = params

        const serachId = await Admins.findById(id)
        if (!serachId) {
            throw new NotFoundError(404,"ID not found")
        }
        const deletedAdmin = await Admins.findByIdAndDelete(id)

        return deletedAdmin
    }

    async updateAdmin(params, body) {
        const { id } = params

        if (body?.branch) {
            const branch_id = await Branches.findOne({ name: body.branch })
            body.branch = branch_id.id
        }

        if (body?.password) {
            const ready_pass = await hashPass(body.password)
            body.password = ready_pass
        }

        const serachId = await Admins.findById(id)
        if (!serachId) {
            throw new NotFoundError(404,"ID not found")
        }

        const updatedAdmin = await Admins.findByIdAndUpdate(id, body, { new: true })

        return updatedAdmin
    }
}


export default new adminsService()