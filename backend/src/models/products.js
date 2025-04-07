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
    type: Schema.Types.ObjectId,
        ref: "Distributor",
        require:true
},

suplierId:{
    type: Schema.Types.ObjectId,
    ref: "Supplier",
    require:true
},
categoryId:{
    type: Schema.Types.ObjectId,
    ref: "Category",
    require:true

},
stock:{
    type:Number,
    require:true,
min:0
},
image:{
    type:String,
    require:true,
    maxLenght:10

},
isVerified:{
type:Boolean,
require:true

} }, 
{
timestamps:true,
strict:true
})

export default model ("Products", productsSchema );