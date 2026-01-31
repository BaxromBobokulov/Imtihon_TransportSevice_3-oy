import JWT from "jsonwebtoken"
import { Staffs } from "../models/staffs.model.js"
import { config } from "dotenv"
config()


export default async (req, res, next) => {
    try {
        const { token } = req.headers

        if (!token) {
            const error = new Error("JWT not exits")
            throw error
        }

        const data = JWT.verify(token, process.env.SECRET)

        const FoundUser = await Staffs.findById(data.id)

        if (!FoundUser) {
            const error = new Error("User not found")
            throw error
        }

        req.user = data
        next()
    } catch (error) {
        next(error)
    }
}