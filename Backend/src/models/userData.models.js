import mongoose,{Schema} from "mongoose";


const userDataSchema = new Schema (
    {
        age : {
            type : Number, 
            required : true
        }, 
        allergies : {
            type : String
        }, 
        pastDisease : {
            type : String 
        }, 
        currentDisease : {
            type : String
        }
    }
); 

export const UserData = mongoose.model("UserData",userDataSchema); 