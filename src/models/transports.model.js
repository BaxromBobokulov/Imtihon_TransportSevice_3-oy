import mongoose from "mongoose";


const transportsSchema = new mongoose.Schema({
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Branches"
    },
    model: {
        type: String,
        minlength: 3,
        maxlength: 30
    },
    color: {
        type: String,
        minlength: 3,
        maxlength: 15
    },
    img: {
        type: String,
        minlength: 3,
        maxlength: 15,
        default:"default.png"
    },
    price: {
        type: Number
    }

}, {timestamps:true})


export const Transports  = mongoose.model("transports",transportsSchema)