import { Permissions } from "../models/permission.model.js"

export const roleGuard = (model, roles) => {
    return async (req,res,next) => {
        try {

            if(req.user.role == "superadmin"){
                return next();
            }
            const SearchStaff = await Permissions.findOne({
                StaffId:req.user.id,
                permissionModel:model,
                action:roles
            })

            if(!SearchStaff) {
                throw new Error("You cannot do it without permission")
            }

            next()

        } catch (error) {
            next(error)
        }
    }
}