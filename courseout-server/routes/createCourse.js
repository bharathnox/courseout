const express = require('express');
const courseModel = require('../model/coursemodel')

const router = express.Router();

router.post('/', (req, res) => {
    courseModel.create(req.body)
    .then(courses => res.json(courses))
    .catch(err => res.json(err))
})

module.exports = router;