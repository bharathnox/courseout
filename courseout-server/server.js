const express = require('express')
const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors())

const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.set('view engine', 'ejs')

require('dotenv').config()

const mongoose = require('mongoose')

const useSignup = require('./routes/signup')
const useSignuptr = require('./routes/signuptr')
const useLogin = require('./routes/login')
const useLogintr = require('./routes/logintr')
const useCreateCourse = require('./routes/createCourse')
const useIndex = require('./routes/index')

app.use("/", useIndex)

app.use("/signup", useSignup)

app.use("/signuptr", useSignuptr)

app.use("/login", useLogin)

app.use("/logintr", useLogintr)

app.use("/createCourse", useCreateCourse)

mongoose.connect(process.env.MONGO_URL).then( async ()=>{
    console.log('Connected to MongoDB');

    app.listen(process.env.PORT, ()=> {
        console.log(`Server running on port: ${process.env.PORT}`);
    })
})