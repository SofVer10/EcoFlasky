import {Schema, model} from "mongoose";

const supplierSchema = new Schema({
    name: {
        type: String,
        require: true,
        maxLength: 100
    },
    cellphone: {
        type: Number,
        require: true,
        match: /^\+?(\d{1,3})?(\d{9})$/
    },
    lastShipDate: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return value < Date.now();
            },
            message: "La fecha es erronea"
        }
    },
    usualShipDate:{
        type: String,
        require: true
    }
})

export default model ("Supplier", supplierSchema)