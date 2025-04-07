/*
   Campos:
      userId
      paymentMethod
      shoppingCartId
*/

import { Schema, model} from "mongoose";

const movementsSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "Clients",
            requiere: true
        },
        paymentMethod: {
            type: String,
            require: true
        },

        shoppingCartId:{ 
            type: Schema.Types.ObjectId,
            ref: "ShppingCart",
            requiere: true
        }
    },
    {
        timestamps: true,
        strict: false
    }
)

export default model("Movements", movementsSchema)