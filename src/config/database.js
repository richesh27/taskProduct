const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");


exports.connectDB = async ()=>{
    await mongoose.connect(MONGO_URI, {
        useNewUrlParser: "true",
        useUnifiedTopology: "true"
    });

}