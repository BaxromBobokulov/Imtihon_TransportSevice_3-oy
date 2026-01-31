import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema({
    StaffId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Staffs",
        required: true
    },
    permissionModel: {
        type: String,
        enum: ["Branches", "Staffs", "Transports","Admins","Permissons"],
        default:"staff",
        required: true
    },
    action: {
        type:[String],
        enum:["GET", "POST", "PUT", "DELETE"],
        default:["GET"],
        required: true
    }
}, { timestamps: true });

export const Permissions = mongoose.model("permissions", permissionSchema);
