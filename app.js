const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// const {PORT} = require("./src/config/config")
const {connectDB} = require("./src/config/database");
const apiV1Routes = require('./src/routes/index');

const PORT = 3005;
const app = express();


const setupAndStartServer = async ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiV1Routes);


    app.listen(PORT, async ()=>{
        console.log(`Server is running on PORT : ${PORT}`);
        await connectDB();
        console.log("mongoDB connected")
    });
}

setupAndStartServer();