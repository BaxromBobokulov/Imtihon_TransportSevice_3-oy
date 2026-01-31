import adminsService from "../services/admins.service.js"
class adminsController {
    constructor() { }

    async admins(req, res, next) {
        try {
            const admins = await adminsService.admins()
            res.status(200).json({
                status: 200,
                message: admins
            })
        } catch (error) {
            next(error)
        }
    }

    async getAdminById(req, res, next) {
        try {
            const admin = await adminsService.getAdminById(req.params)
            res.status(200).json({
                status: 200,
                message: admin
            })
        } catch (error) {
            next(error)
        }
    }

    async addAdmin(req, res,next) {
        try {
            const admins = await adminsService.addAdmin(req.body)
            res.status(201).json({
                status: 201,
                message: "New admin added successfully",
                accessToken: admins.accessToken,
                refreshToken: admins.refreshToken

            })
        } catch (error) {
            next(error) 
        }
    }

    async deleteAdmin(req, res,next) {
        try {
            const data = await adminsService.deleteAdmin(req.params)

            res.status(200).json({
                status: 200,
                message: "Admin delete successfully"
            })
        } catch (error) {
            next(error)
        }
    }

    async updateAdmin(req, res, next) {
        try {
            const data = await adminsService.updateAdmin(req.params, req.body)

            res.status(200).json({
                status: 200,
                message: "Admin updated successfully"
            })
        } catch (error) {
            next(error)
        }
    }
}


export default new adminsController()