const express = require("express");
const router = require("./router/router");
require("./database/db");
const cors = require('cors')
const bodyParser = require("body-parser");

require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 5000 ;


app.use(express.json());
app.use(router);
app.use(cors());
app.use(bodyParser.json());



app.listen(PORT, ()=>{
    console.log(`Listening to port ${PORT}`);
});