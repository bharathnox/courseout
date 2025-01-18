const express = require('express');
const app = express();
const mongoose = require('mongoose');
const courseModel = require('./model/coursemodel')
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

const stdUserRoute = require('./routes/stdUser')

const port = 5002;
app.use(cors())
app.use(express.json());
app.use("/stdUser", stdUserRoute)
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    courseModel.find({})
    .then(courses => res.json(courses))
    .catch(err => res.json(err))
})

app.post('/createCourse', (req, res) => {
    courseModel.create(req.body)
    .then(courses => res.json(courses))
    .catch(err => res.json(err))
})

app.get('/signup', (req, res) => {
    return res.render("signup")
})

mongoose.connect(process.env.MONGO_URL).then( async ()=>{
    console.log('Connected to MongoDB');

    app.listen(port, ()=> {
        console.log(`Server running on port: ${port}`);
    })
})