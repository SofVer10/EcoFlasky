/*
name
password
email
cellphone
*/

import { Schema, model  } from "mongoose"; 


const clientSchema = new Schema(
    { name: {
type:String,
 require:true,
 maxLength:100
},
lastName:{
    type:String,
    require:true,
    maxLenght:100
},
email:{
type:String,
require:true,
maxLenght:100
},
password:{
    type:String,
     require:true,
     maxLenght:100
},

cellphone:{
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

export default model ("Clients", clientSchema );