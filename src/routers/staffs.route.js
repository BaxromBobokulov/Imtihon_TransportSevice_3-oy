import { Router } from "express";
import staffsController from "../controllers/staffs.controller.js";
import checkToken from "../middleware/checkToken.js";
import { roleGuard } from "../middleware/role.guard.js";
import staffValidations from "../middleware/staff.validations.js";

const staffRouter = Router()


staffRouter.get("/api/staffs",checkToken,roleGuard("Staffs","GET"),staffsController.staffs)
staffRouter.get("/api/staff/:id",checkToken,roleGuard("Staffs","GET"), staffsController.getStaffById)
staffRouter.post("/api/login",staffsController.login)
staffRouter.post("/api/addStaff",checkToken,roleGuard("Staffs","POST"),staffValidations.addStaff,staffsController.addStaff)
staffRouter.delete("/api/deleteStaff/:id",checkToken,roleGuard("Staffs","DELETE"),staffsController.deleteStaff)
staffRouter.put("/api/updateStaff/:id",checkToken,roleGuard("Staffs","PUT"),staffValidations.updateStaff,staffsController.updateStaff)


export default staffRouter