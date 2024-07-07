const mongoose = require('mongoose');
const Schema = mongoose.Schema;

async function connectDB(CONN_STRING) {
    try {
        await mongoose.connect(CONN_STRING);
        console.log("Successfully connected to MongoDB database!");
        return true;
    } catch (err) {
        console.error("Error connecting to MongoDB:", "\n", err);
        return false;
    }
}

const userData = new Schema({
    age: Number,
    allergies: String,
    pastDiseases: String,
    currentCondition: String,
});

const userSchema = new Schema({
    fullName: String,
    email: String,
    password: String,
    userData: userData
});

const User = mongoose.model('User', userSchema);

module.exports = {
    connectDB,
    User
};
