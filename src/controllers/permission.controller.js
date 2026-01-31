import permissionService from "../services/permission.service.js";

class permiisonController {
    constructor() { }

    async allPermissions(req, res,next) {
        try {
            const permissions = await permissionService.allPermissions()
            res.status(200).json({
                status: 200,
                message: permissions
            })
        } catch (error) {
            next(error)
        }
    }

    async addPermission(req, res,next) {
        try {
            const permissions = await permissionService.addPermission(req.body)
            res.status(200).json({
                status: 200,
                message: "Permission added successfully"
            })
        } catch (error) {
            next(error)
        }
    }

    async deletePermission(req, res,next) {
        try {
            const permissions = await permissionService.deletePermission(req.params)
            res.status(200).json({
                status: 200,
                message: "Permission deleted successfully"
            })
        } catch (error) {
            next(error)
        }
    }


    async updatePermission(req, res,next) {
        try {
            const permissions = await permissionService.updatePermission(req.params, req.body)
            res.status(200).json({
                status: 200,
                message: "Permission updated successfully"
            })
        } catch (error) {
            next(error)
        }
    }
}


export default new permiisonController()