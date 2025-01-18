const express = require('express');
const { handlestdUserSignup } = require('../controllers/stdUser')
const router = express.Router();

router.post('/', handlestdUserSignup)

module.exports = router;