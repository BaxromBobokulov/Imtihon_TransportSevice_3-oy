import { config } from "dotenv"
import JWT from "jsonwebtoken"
config()

export function createToken(id,tokenusername,role) {
    return {
        accessToken:JWT.sign({id,tokenusername,role},process.env.SECRET, {expiresIn:"1h"}),
        refreshToken:JWT.sign({id,tokenusername,role},process.env.SECRET, {expiresIn:"100h"}),
    }
}