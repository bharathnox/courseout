const express = require('express')
const courseModel = require('../model/coursemodel')
const router = express.Router();

router.get('/', (req, res) => {
    courseModel.find({})
    .then(courses => res.json(courses))
    .catch(err => res.json(err))
})

module.exports = router;