const express = require('express')
const trModel = require('../model/userTr')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        //get te data from user
        const { email, password } = req.body;

        //check all data is provided
        if (!(email && password)) {
            res.status(400).send("All entries are necessary")
        }

        //find user in db
        const userTr = await trModel.findOne({ email })
        //if user not found
        if (!userTr) {
            return res.status(400).send("User not found") // redirect to signup
        }

        //match the password
        if (userTr && (await bcrypt.compare(password, userTr.password))) {
            const token = jwt.sign({ id: userTr._id }, process.env.SECRET_KEY, { expiresIn: "1h" })
            userTr.token = token
            userTr.password = undefined

            //send token in user cookie
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            };
            return res.status(200).cookie("token", token, options).json({
                success: true,
                token,
                userTr
            })
        } else {
            return res.status(401).send("Incorrect password")
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;