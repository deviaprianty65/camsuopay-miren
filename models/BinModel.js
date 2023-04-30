const mongoose = require("mongoose");

const BinModel = mongoose.Schema({
    bin:{
        type: String,
        required: true,
    },
    brand:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    issuer:{
        type: String,
        required: true,
    },
    alpha_2:{
        type: String,
        required: true,
    },
    alpha_3:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,
    },
});


module.exports = mongoose.model("BinModel", BinModel);