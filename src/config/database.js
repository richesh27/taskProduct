const mongoose = require("mongoose");
// const { MONGO_URI } = require("./config");


exports.connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://kunwarrichesh:g0YbWro64Ka2VZ7Z@cluster0.nbhuoib.mongodb.net/", {
        useNewUrlParser: "true",
        useUnifiedTopology: "true"
    });

}