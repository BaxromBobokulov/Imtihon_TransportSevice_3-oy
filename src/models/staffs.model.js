import mongoose from "mongoose";


const staffsSchema = new mongoose.Schema({
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Branches"

    },
    username: {
        type: String,
        minlength: 3,
        maxlength: 15,
    },
    password: {
        type: String
    },
    birthdate: {
        type: String
    },
    gender: {
        type: String,
        enum: ["Male", "Female"]
    },
    role: {
        type: String,
        enum: ["admin", "superadmin", "staff"],
        default: "staff"
    }
})


export const Staffs = mongoose.model("staffs", staffsSchema)