const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    topic : {
        type: String,
        required: true
    },
    question : {
        type: String,
    },
    answer : {
        type: String,
        required : true
    }
});

const API = mongoose.model("API", schema);
module.exports = API;