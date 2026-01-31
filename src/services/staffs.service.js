import { Staffs } from "../models/staffs.model.js"
import { Branches } from "../models/branches.model.js"
import { hashCompare, hashPass } from "../utils/bcrypt.js"
import { createToken } from "../utils/token.js"
import { NotFoundError, BadRequestError, ConflictError } from "../utils/error.js"
import { join,extname } from "path"

class staffsService {
    constructor() { }

    async staffs() {
        const staffs = Staffs.find()
        return staffs
    }

    async getStaffById(params) {
        const { id } = params

        const serachId = await Staffs.findById(id)
        if (!serachId) {
            throw new NotFoundError(404, "ID not found")
        }
        const staff = await Staffs.findById(id)
        return staff
    }

    async login(body) {
        const { username, password } = body

        const serachUsername = await Staffs.findOne({ username })

        if (!serachUsername) {
            throw new NotFoundError(404, "Staff's id not found")
        }

        if (!await hashCompare(password, serachUsername.password)) {
            throw new ConflictError(403, "Wrong password")
        }

        return createToken(serachUsername._id, username, serachUsername.role)

    }

    async addStaff(body, files) {
        const { username, branch, password, re_password, birthdate, gender, role } = body
        // const { file } = files

        if (password !== re_password) {
            throw new ConflictError(403, "Wrong password")
        }
        const find_branch = await Branches.findOne({ name: branch })

        // const filename = Date.now() + extname(File.name)
        // const path = join(process.cwd(), "src", "uploads", filename)

        // file.mv(path)

        if (!find_branch) {
            throw new NotFoundError(404, "Branch not found")
        }
        const ready_pass = await hashPass(password)

        const PostedStaff = await Staffs.create({ branch: find_branch.id, username, password: ready_pass, birthdate, gender, role })
        return createToken(PostedStaff._id, username, PostedStaff.role)
    }

    async deleteStaff(params) {
        const { id } = params

        const serachId = await Staffs.findById(id)
        if (!serachId) {
            throw new NotFoundError(404, "ID not found")
        }

        const deletedStaff = await Staffs.findByIdAndDelete(id)

        return deletedStaff
    }

    async updateStaff(params, body) {
        const { id } = params

        if (body?.branch) {
            const branch_id = await Branches.findOne({ name: body.branch })
            body.branch = branch_id.id
        }

        if (body?.password) {
            const ready_pass = await hashPass(body.password)
            body.password = ready_pass
        }

        const serachId = await Staffs.findById(id)
        if (!serachId) {
            throw new NotFoundError(404, "ID not found")
        }

        const updatedStaff = await Staffs.findByIdAndUpdate(id, body, { new: true })

        return updatedStaff
    }


}


export default new staffsService()