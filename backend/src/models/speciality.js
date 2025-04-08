import {Schema, model} from "mongoose";

const specialitySchema = new Schema({
    speciality: {
        type: String,
        require: true
    }
})

export default model ("Speciality", specialitySchema)