/*

userId
rating
comment
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
 }
},
{
timestamps:true,
strict:true
})

export default model ("Ratings", ratingsSchema );


