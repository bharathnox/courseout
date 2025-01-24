const express = require('express')
const trModel = require('../model/userTr')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        //get all data from body
        const { trName, email, password } = req.body;
        
        //all data should exist
        if(!(trName && email && password)){
            res.status(400).send("All entries are necessary")
        }

        // check if user already exists
        const existingtrUser = await trModel.findOne({email})
        if(existingtrUser) {
            res.status(401).send("user already exists with same email")
        }

        //encrypt password
        const encPassword = await bcrypt.hash(password, 10)

        //add user to db
        const userTr = await trModel.create({
            trName,
            email,
            password: encPassword
        })

        //generate a token for user and send it
        const token = jwt.sign({id: userTr._id}, process.env.SECRET_KEY, {expiresIn: "1h"})

        userTr.token = token
        userTr.password = undefined // pass in db wont be undefined

        res.status(201).json(userTr)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;