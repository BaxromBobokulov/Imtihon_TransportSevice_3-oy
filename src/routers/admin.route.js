import adminController from "../controllers/admin.controller.js";
import { Router } from "express";
import checkToken from "../middleware/checkToken.js";
import { roleGuard } from "../middleware/role.guard.js";
import adminValidations from "../middleware/admin.validations.js";


const adminRouter = Router()

adminRouter.get("/api/admins",checkToken,roleGuard("Admins","GET"),adminController.admins)
adminRouter.get("/api/admin/:id",checkToken,roleGuard("Admins","GET"),adminController.getAdminById)
adminRouter.post("/api/addAdmin",checkToken,roleGuard("Admins","POST"),adminValidations.addAdmin,adminController.addAdmin)
adminRouter.delete("/api/deleteAdmin/:id",checkToken,roleGuard("Admin","DELETE"),adminController.deleteAdmin)
adminRouter.put("/api/updateAdmin/:id",checkToken,roleGuard("Admins","PUT"),adminValidations.updateAdmin,adminController.updateAdmin)



export default adminRouter