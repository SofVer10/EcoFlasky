/*

userId
rating
comment
productId
*/ 

import { Schema, model  } from "mongoose"; 


const ratingsSchema = new Schema(
    { userId: {
        type: Schema.Types.ObjectId,
        ref: "Clients",
        require:true
},
rating:{
    type:Number,
    max:5,
    min:0
},
comment:{
type:String,
require:true,
maxLenght:200
 },
productId: {
        type: Schema.Types.ObjectId,
        ref: "Products",
        require:true
}
},
{
timestamps:true,
strict:true
})

export default model ("Ratings", ratingsSchema );


