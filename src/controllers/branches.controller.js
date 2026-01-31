import branchesService from "../services/branches.service.js";

class branchesContrller {
    constructor() { }

    async branches(req, res,next) {
        try {
            const data = await branchesService.branches()
            res.status(200).json({
                status: 200,
                branches: data
            })
        } catch (error) {
            next(error)
        }
    }

    async getBranchById(req, res,next) {
        try {
            const branch = await branchesService.getBranchById(req.params)
            res.status(200).json({
                status: 200,
                message: branch
            })
        } catch (error) {
            next(error)
        }
    }

    async addBranch(req, res,next) {
        try {
            const data = await branchesService.addBranch(req.body)
            res.status(201).json({
                status: 201,
                message: "Branch created successfully"
            })
        } catch (error) {
            next(error)
        }
    }

    async deleteBranch(req, res,next) {
        try {
            const data = await branchesService.deleteBranch(req.params)

            res.status(200).json({
                status: 200,
                message: "Branch delete successfully"
            })
        } catch (error) {
            next(error)
        }
    }

    async updateBranch(req, res,next) {
        try {
            const data = await branchesService.updateBranch(req.params, req.body)

            res.status(200).json({
                status: 200,
                message: "Branch updated successfully"
            })
        } catch (error) {
            next(error)
        }
    }

}

export default new branchesContrller()