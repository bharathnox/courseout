const express = require('express')
const stdModel = require('../model/userStd')
const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const studentId = req.params.id;

        // Find the student and automatically populate the full course documents using the schema ref
        const student = await stdModel.findById(studentId).populate('enrolledCourses')

        if (!student) {
            return res.status(404).send("Student not found");
        }

        res.status(200).json(student.enrolledCourses);
    } catch (error) {
        console.error("Fetch enrolled courses error:", error);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;
