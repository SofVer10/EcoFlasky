import {Schema, model} from "mongoose";

const desingsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "Clients",
        require: true
    },
    desing: {
        type: String,
        require: true
    }
})

export default model ("Desing", desingsSchema)