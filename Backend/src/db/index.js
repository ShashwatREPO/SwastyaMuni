import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`); 

        console.log(`\nMongoDb connected! DB host : ${connectionInstance.connection.host}`)
    }catch(e){
        console.log('mongo db connection error ',e); 
        process.exit(1); 
    }
};  


export default connectDB ; 