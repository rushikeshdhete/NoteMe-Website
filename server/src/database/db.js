const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// require('dotenv').config();

mongoose.connect(process.env.DB)
.then(()=>{
    console.log("Database Connected");
})
.catch((e)=>{
    console.log(e);
});