import './AvailableCourses.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function AvailableCourses () {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5002")
        .then(result => setCourses(result.data))
        .catch(err => console.log(err))
    }, [])
    return(
        <>
            <div className='divcourses'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>CourseName</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((course) => {
                                return <tr key={course.id}>
                                    <td>{course.courseName}</td>
                                    <td>{course.description}</td>
                                    <td>₹{course.price}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}