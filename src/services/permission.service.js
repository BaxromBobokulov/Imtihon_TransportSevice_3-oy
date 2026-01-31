import { Permissions } from "../models/permission.model.js";
import { Staffs } from "../models/staffs.model.js";
import { BadRequestError } from "../utils/error.js";

class permissionService {
    constructor() { }

    async allPermissions() {
        const permissions = Permissions.find()
        return permissions
    }

    async addPermission(body) {
        const { staffname , permissionModel, action } = body

        const serachName = await Staffs.findOne({username:staffname})

        if(!serachName){
            throw new NotFoundError(404,"Staff's name not found")
        }

        const PostedPermi = await Permissions.create({StaffId:serachName.id, permissionModel, action })
        return PostedPermi
    }

    async deletePermission(params) {
        const { id } = params

        const serachId = await Permissions.findById(id)
        if (!serachId) {
            throw new BadRequestError(400,"Permisson's id wrong")
        }

        const deletedPermi = await Permissions.findByIdAndDelete(id)

        return deletedPermi
    }

    async updatePermission(params, body) {
        const { id } = params

        const serachId = await Permissions.findById(id)
        if (!serachId) {
            throw new BadRequestError(400,"Permisson's id not exists")
        }

        const updatePermi = await Permissions.findByIdAndUpdate(id, body, {new:true})

        return updatePermi
    }
}


export default new permissionService()