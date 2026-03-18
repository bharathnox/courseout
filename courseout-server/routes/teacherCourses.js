const express = require('express')
const courseModel = require('../model/coursemodel')
const router = express.Router();

router.get('/:id', (req, res) => {
    const teacherId = req.params.id;
    courseModel.find({ teacherId: teacherId })
        .then(courses => res.json(courses))
        .catch(err => res.status(500).json(err))
})

module.exports = router;
