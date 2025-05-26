/* 
name
description
price
distributorId 
suplierId 
categoryId
stock
image
*/


import { Schema, model  } from "mongoose"; 


const productsSchema = new Schema(
    { name: {
type:String,
 require:true,
 maxLength:100
},
description:{
    type:String,
    require:true,
    maxLenght:200
},
price:{
type:Number,
require:true,
min:0

},
distributorId:{
    type:String,
 require:true,
 maxLength:100
},

suplierId:{
    type: String,
},
categoryId:{
    type: String,

},
stock:{
    type:Number,
min:0
},
isVerified:{
type:Boolean,

} }, 
{
timestamps:true,
strict:true
})

export default model ("Products", productsSchema );