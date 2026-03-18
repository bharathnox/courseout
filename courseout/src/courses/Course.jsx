import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Course.css'
import axios from 'axios'

export default function Course() {
    const [courseName, setCourseName] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const teacherId = localStorage.getItem('teacherId');
        axios.post("http://localhost:5002/createCourse", { courseName, description, price, teacherId })
            .then(result => {
                console.log(result);
                window.location.reload();
                navigate('/teachers')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="courseform-container">
            <div className="courseform glass">
                <form onSubmit={handleSubmit}>
                    <h2>Create a Course</h2>
                    <p className="form-subtitle">Share your expertise with the world</p>

                    <div className="formlabel">
                        <label>Course Name</label>
                        <input type="text" placeholder="e.g. Advanced React Patterns" required onChange={(e) => setCourseName(e.target.value)} />
                    </div>

                    <div className="formlabel">
                        <label>Description</label>
                        <textarea rows={4} maxLength={200} placeholder="What will students learn?" required onChange={(e) => setDescription(e.target.value)} ></textarea>
                    </div>

                    <div className="formlabel">
                        <label>Price (₹)</label>
                        <input type="number" min={0} placeholder="e.g. 499" required onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    <button className="submit-btn">Publish Course</button>
                </form>
            </div>
        </div>
    )
}