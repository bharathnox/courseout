const express = require('express')
const stdModel = require('../model/userStd')
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { studentId, courseId } = req.body;

        if (!studentId || !courseId) {
            return res.status(400).send("Student ID and Course ID are required");
        }

        // Add the courseId to the enrolledCourses array using MongoDB $addToSet to avoid duplicates
        const updatedStudent = await stdModel.findByIdAndUpdate(
            studentId,
            { $addToSet: { enrolledCourses: courseId } },
            { new: true }
        );

        if (!updatedStudent) {
            return res.status(404).send("Student not found");
        }

        res.status(200).json({ success: true, message: "Enrolled successfully", student: updatedStudent });
    } catch (error) {
        console.error("Enrollment error:", error);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;
