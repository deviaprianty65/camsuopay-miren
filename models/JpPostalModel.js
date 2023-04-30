const mongoose = require("mongoose");

const JpPostal = mongoose.Schema({  
    peasecode: {
        type: String,
        required: true,
    },
    codearea: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    prefectureKana: {
        type: String,
        required: true,
    },
    cityKana: {
        type: String,
        required: true,
    },
    townKana: {
        type: String,
        required: true,
    },
    prefecture: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    town: {
        type: String,
        required: true,
    },
});


module.exports = mongoose.model("JpPostal", JpPostal);