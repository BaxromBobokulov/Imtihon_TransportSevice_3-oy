import bcrypt from "bcrypt"


export function hashPass(password) {
    return bcrypt.hash(password,10)
}

export function hashCompare(password,passHash) {
    return bcrypt.compare(password,passHash)
}