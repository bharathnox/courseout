const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    teacherId: {
        type: String,
        required: true,
    },
    courseName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
})

const courseModel = mongoose.model('courses', courseSchema);
module.exports = courseModel