import mongoose from "mongoose";
import {config} from "./src/config.js"


mongoose.connect(config.db.URI)


const connection = mongoose.connection; 

connection.once("open",  () =>
    {console.log("DB IS CONNECTED");   
    });

connection.on("disconnected", () =>
    {console.log("DB IS DISCONECTED");
    });

connection.once("error", (error) =>  
    {console.log("ERROR FOUND" + error);
    });