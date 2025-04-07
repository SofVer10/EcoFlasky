import  { Schema, model} from "mongoose"

const categorySchema = new Schema ({
name: {
type: String,
require: true,
},
description:{
    type: String,
    require: true,
    maxLength: 100
}
})

export default model ("Category", categorySchema);