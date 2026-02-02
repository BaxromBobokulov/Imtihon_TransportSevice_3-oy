import { Permissions } from "../models/permission.model.js"
import { ConflictError } from "../utils/error.js";

export const roleGuard = (model, action) => {
    return async (req,res,next) => {
        try {

            if(req.user.role == "superadmin"){
                return next();
            }
            const SearchStaff = await Permissions.findOne({
                StaffId:req.user.id,
                permissionModel:model,
                action
            })

            if(!SearchStaff) {
                throw new ConflictError(403,"You cannot do it without permission")
            }

            next()

        } catch (error) {
            next(error)
        }
    }
}