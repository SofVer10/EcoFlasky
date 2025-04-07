/*

userId
ProductId
amount
*/ 

import { Schema, model  } from "mongoose"; 


const FavoriteSchema = new Schema(
    { userId: {
        type: Schema.Types.ObjectId,
        ref: "Clients",
        require:true
},
productId: {
    type: Schema.Types.ObjectId,
    ref: "Products",
    require:true
},
amount:{
type:Number,
require:true,
min:0
 }
},
{
timestamps:true,
strict:true
})

export default model ("Favorites", FavoriteSchema );


