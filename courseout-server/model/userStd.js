const mongoose = require('mongoose')

const userStdSchema = new mongoose.Schema({
    stdName: {
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
    },
    enrolledCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'courses'
    }]
})

const stdModel = mongoose.model('userStds', userStdSchema)
module.exports = stdModel