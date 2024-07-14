import mongoose,{Schema} from "mongoose";

const UserSchema = new Schema(
    {
        fullName : {
            type : String, 
            required : true, 
            trim : true
        }, 
        email : {
            type : String, 
            required : true, 
            unique: true,
            match: [/.+\@.+\..+/, "Please fill a valid email address"]
        }, 
        password : {
            type : String, 
            required : true
        },
        userData : {
            type : Schema.Types.ObjectId, 
            ref : "UserData"
        },
        otp : {
            type : Number
        }, 
        otpExpires : {
            type : Number
        }
    },{timestamps : true}
); 


export const User = mongoose.model('User',UserSchema); 