import transportController from "../controllers/transport.controller.js";
import { Router } from "express";
import checkToken from "../middleware/checkToken.js";
import { roleGuard } from "../middleware/role.guard.js";
import transportValidations from "../middleware/transport.validations.js";



const transportRouter = Router() 

transportRouter.get("/api/transports",checkToken,roleGuard("Transports","GET"), transportController.transports)
transportRouter.post("/api/addTransport",checkToken,roleGuard("Transports","POST"),transportValidations.addTransport,transportController.addTransport)
transportRouter.delete("/api/deleteTransport/:id",checkToken,roleGuard("Transports","DELETE"),transportController.deleteTransport)
transportRouter.put("/api/updateTransport/:id",checkToken,roleGuard("Transports","PUT"),transportValidations.updateTransport,transportController.updateTransport)



export default transportRouter