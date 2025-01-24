const mongoose = require('mongoose')

const userTrSchema = new mongoose.Schema({
    trName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        default: null
    }
})

const trModel = mongoose.model('userTrs', userTrSchema)
module.exports = trModel