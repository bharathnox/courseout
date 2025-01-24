const express = require('express')
const stdModel = require('../model/userStd')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        //get te data from user
        const { email, password } = req.body;
        
        //check all data is provided
        if(!(email && password)) {
            res.status(400).send("All entries are necessary")
        }

        //find user in db
        const userStd = await stdModel.findOne({email})
        //if user not found
        if(!userStd) {
            res.status(400).send("user not found") // redirect to signup
        }

        //match the password
        if (userStd && (await bcrypt.compare(password, userStd.password))) {
            const token = jwt.sign({id: userStd._id}, process.env.SECRET_KEY, {expiresIn: "1h"})
            userStd.token = token
            userStd.password = undefined

            //send token in user cookie
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            };
            res.status(200).cookie("token", token, options).json({
                success: true,
                token,
                userStd
            })
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;