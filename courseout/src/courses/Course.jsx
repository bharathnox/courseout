import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Course.css'
import axios from 'axios'

export default function Course(){
    const [courseName, setCourseName] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5002/createCourse", {courseName, description, price})
        .then(result => {
            console.log(result);
            window.location.reload();
            navigate('/teachers')
        })
        .catch(err => console.log(err))
    }
    return(
        <>
            <div className="courseform">
                <div className="courseformdiv">
                    <form onSubmit={handleSubmit}>
                        <h2>Add Course</h2>
                        <div className="formlabel">
                            <label htmlFor="">Course Name</label>
                            <input type="text" placeholder="Enter course name" required onChange={(e) => setCourseName(e.target.value)} />
                        </div>
                        <div className="formlabel">
                            <label htmlFor="">Description</label>
                            <textarea name="description" rows={4} cols={4} maxLength={100} placeholder="Enter description of course" required onChange={(e) => setDescription(e.target.value)} ></textarea>
                        </div>
                        <div className="formlabel">
                            <label htmlFor="">Price</label>
                            <input type="Number" min={0} placeholder="Enter course price" required onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <button className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}