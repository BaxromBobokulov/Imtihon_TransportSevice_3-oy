import { config } from "dotenv"
import express from "express"
import { connectDB } from "./database/config.js"
import staffRouter from "./routers/staffs.route.js"
import branchRouter from "./routers/branches.route.js"
import adminRouter from "./routers/admin.route.js"
import transportRouter from "./routers/transport.route.js"
import permissonRouter from "./routers/permission.route.js"
import fs from "fs"
import { join } from "path"
// import { Logger } from "./logs/logger.js"
config()
const server = express()
server.use(express.json())
connectDB()


server.use(staffRouter)
server.use(branchRouter)
server.use(adminRouter)
server.use(transportRouter)
server.use(permissonRouter)


// Error Handler
server.use((error, req, res, next) => {
    if (error.status && error.status < 500) {
        return res.status(error.status).json({
            status: error.status,
            message: error.message,
            name: error.name
        })
    } else {
        let errorText = `\n[${new Date()}]--${req.method}--${req.url}--${req.message}`
        // Logger(errorText)
        fs.appendFileSync(join(process.cwd(), "src", "logs", "error.txt"), errorText)

        return res.status(500).json({
            status: 500,
            message: error.message
        })
    }
})

server.listen(process.env.PORT,() => console.log("Server is running " + process.env.PORT))