const mongoose = require('mongoose')

var teetimeSchema = new mongoose.Schema({
    golferName : {
        type: String,
        required: true,
        trim: true
    },
    holes : {
        type: Number,
        required: true
    },
    cartRequired : {
        type: Boolean,
        required: true
    },
    date : {
        type: date,
        required: true
    },
    greenFee : {
        type: Number
    }
})

module.exports = mongoose.model('teetimes', teetimeSchema)