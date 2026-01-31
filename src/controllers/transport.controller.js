import transportsService from "../services/transports.service.js"

class transportsContrller {
    constructor() { }

    async transports(req, res,next) {
        try {
            const data = await transportsService.transport()
            res.status(200).json({
                status: 200,
                branches: data
            })
        } catch (error) {
            next(error)
        }
    }
    async addTransport(req, res,next) {
        try {
            const data = await transportsService.addTransport(req.body)
            res.status(201).json({
                status: 201,
                message: "Transport created successfully"
            })
        } catch (error) {
            next(error)
        }
    }

    async deleteTransport(req, res,next) {
        try {
            const data = await transportsService.deleteTransport(req.params)

            res.status(200).json({
                status: 200,
                message: "Transport delete successfully"
            })
        } catch (error) {
            next(error)
        }
    }

    async updateTransport(req, res,next) {
        try {
            const data = await transportsService.updateTransport(req.params, req.body)

            res.status(200).json({
                status: 200,
                message: "Transport updated successfully"
            })
        } catch (error) {
            next(error)
        }
    }

}


export default new transportsContrller()