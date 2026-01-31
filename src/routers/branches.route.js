import branchesController from "../controllers/branches.controller.js";
import { Router } from "express";
import checkToken from "../middleware/checkToken.js";
import { roleGuard } from "../middleware/role.guard.js";
import branchValidations from "../middleware/branch.validations.js";

const branchRouter = Router() 

branchRouter.get("/api/branches",checkToken,roleGuard("Branches","GET"), branchesController.branches)
branchRouter.get("/api/branch/:id",checkToken,roleGuard("Branches","GET"),branchesController.getBranchById)
branchRouter.post("/api/addBranch",checkToken,roleGuard("Branches","POST"),branchValidations.addBranch,branchesController.addBranch)
branchRouter.delete("/api/deleteBranch/:id",checkToken,roleGuard("Branches","DELETE"),branchesController.deleteBranch)
branchRouter.put("/api/updateBranch/:id",checkToken,roleGuard("Branches","PUT"),branchValidations.updateBranch,branchesController.updateBranch)



export default branchRouter