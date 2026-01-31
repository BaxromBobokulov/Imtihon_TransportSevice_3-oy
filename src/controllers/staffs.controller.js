import { Staffs } from "../models/staffs.model.js";
import staffsService from "../services/staffs.service.js";

class staffsController {
    constructor() { }

    async staffs(req, res,next) {
        try {
            const staffs = await staffsService.staffs()
            res.status(200).json({
                status: 200,
                message: staffs
            })
        } catch (error) {
            next(error)
        }
    }

    async getStaffById(req, res,next) {
        try {
            const staff = await staffsService.getStaffById(req.params)
            res.status(200).json({
                status: 200,
                message: staff
            })
        } catch (error) {
            next(error)
        }
    }

    async login(req,res,next) {
        try {
            const staff = await staffsService.login(req.body)
            res.status(200).json({
                status:200,
                message:"Login successfully",
                accessToken:staff.accessToken,
                refreshToken:staff.refreshToken
            })
        } catch (error) {
            next(error)
        }
    }

    async addStaff(req, res,next) {
        try {
            const staffs = await staffsService.addStaff(req.body,req.files)
            res.status(201).json({
                status: 201,
                message: "New staff added successfully",
                accessToken:staffs.accessToken,
                refreshToken:staffs.refreshToken

            })
        } catch (error) {
            next(error)
        }
    }

    async deleteStaff(req, res,next) {
        try {
            const data = await staffsService.deleteStaff(req.params)

            res.status(200).json({
                status: 200,
                message: "Staff delete successfully"
            })
        } catch (error) {
            next(error)
        }
    }

    async updateStaff(req, res,next) {
        try {
            const data = await staffsService.updateStaff(req.params, req.body)

            res.status(200).json({
                status: 200,
                message: "Staff updated successfully"
            })
        } catch (error) {
            next(error)
        }
    }
}


export default new staffsController()