import permissionController from "../controllers/permission.controller.js";
import { Router } from "express";
import checkToken from "../middleware/checkToken.js";
import { roleGuard } from "../middleware/role.guard.js";
import permissionsValitadions from "../middleware/permissions.valitadions.js";


const permissonRouter = Router()

permissonRouter.get("/api/permissons",checkToken,roleGuard("Permissons","GET"),permissionController.allPermissions)
permissonRouter.post("/api/addPermission",checkToken,roleGuard("Permissons","POST"),permissionsValitadions.addPermission,permissionController.addPermission)
permissonRouter.delete("/api/deletePermission/:id",checkToken,roleGuard("Permissons","DELETE"),permissionController.deletePermission)
permissonRouter.put("/api/updatePermission/:id",checkToken,roleGuard("Permissons","PUT"),permissionsValitadions.updatePermission,permissionController.updatePermission)



export default permissonRouter