const express = require('express')
const stdModel = require('../model/userStd')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        //get all data from body
        const { stdName, email, password } = req.body;
        
        //all data should exist
        if(!(stdName && email && password)){
            res.status(400).send("All entries are necessary")
        }

        // check if user already exists
        const existingstdUser = await stdModel.findOne({email})
        if(existingstdUser) {
            res.status(401).send("user already exists with same email")
        }

        //encrypt password
        const encPassword = await bcrypt.hash(password, 10)

        //add user to db
        const userStd = await stdModel.create({
            stdName,
            email,
            password: encPassword
        })

        //generate a token for user and send it
        const token = jwt.sign({id: userStd._id}, process.env.SECRET_KEY, {expiresIn: "1h"})

        userStd.token = token
        userStd.password = undefined // pass in db wont be undefined

        res.status(201).json(userStd)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;