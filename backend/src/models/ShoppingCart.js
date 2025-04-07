
/*
   Campos:
      productsId
      userId
      amount
      total
*/

import { Schema, model } from "mongoose";

const shoppingCartSchema = new Schema({
    productsId: {
        type: Schema.Types.ObjectId,
            ref: "Products",
            requiere: true
    },
    userId: {
        type: Schema.Types.ObjectId,
            ref: "Users",
            requiere: true
    },
    amount: {
        type: Number,
        require: true,
        min: 1
    },
    total: {
        type: Number,
        require: true,
        min: 1
    }
},{
    timestamps: true,
    strict: false
})

export default model("ShoppingCart", shoppingCartSchema)