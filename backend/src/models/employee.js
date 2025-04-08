/* name
password
speciality*/

/*
name
password
email
cellphone
*/

import { Schema, model  } from "mongoose"; 


const employeeSchema = new Schema(
    { name: {
type:String,
 require:true,
 maxLength:100
},
password:{
    type:String,
    require:true,
    maxLenght:100
},
email:{
    type:String,
    require:true,
    maxLength:100
},
speciality:{
    type: Schema.Types.ObjectId,
    ref: "Speciality",
    require:true
},
isVerified:{
    type:Boolean,
    require:true

} }, 
{
timestamps:true,
strict:true
})

export default model ("Employee", employeeSchema );