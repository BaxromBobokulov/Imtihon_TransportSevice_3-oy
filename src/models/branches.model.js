import mongoose from "mongoose";


const branchaesSchema = new mongoose.Schema({
    name: {
        type: String,
        enum:["Samarqand","Toshkent","Jizzax","Buxoro"]
    },
    address: {
        type: String,
        required: true
    }
}, { timestamps: true })
 

export const Branches = mongoose.model("branches",branchaesSchema)