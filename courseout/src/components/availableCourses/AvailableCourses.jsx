import './AvailableCourses.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function AvailableCourses({ teacherId, isStudent, studentId, mode, setActiveTab }) {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        let url = "http://localhost:5002";
        if (teacherId) {
            url = `http://localhost:5002/teacherCourses/${teacherId}`;
        } else if (isStudent && mode === 'enrolled') {
            url = `http://localhost:5002/studentCourses/${studentId}`;
        }

        axios.get(url)
            .then(result => setCourses(result.data))
            .catch(err => console.log(err))
    }, [teacherId, mode, studentId])

    const handleEnroll = (courseId) => {
        axios.post("http://localhost:5002/enroll", { studentId, courseId })
            .then(res => {
                console.log(res);
                if (setActiveTab) setActiveTab('enrolled');
            })
            .catch(err => {
                console.error(err)
                alert("Failed to enroll. Please try again.");
            });
    }

    return (
        <div className='courses-grid'>
            {courses.length === 0 ? (
                <p className="no-courses">
                    {mode === 'enrolled'
                        ? "You haven't enrolled in any courses yet. Check out the catalog!"
                        : "No courses found yet. Start creating!"}
                </p>
            ) : (
                courses.map((course) => (
                    <div className="course-card glass" key={course._id || course.id}>
                        <div className="course-header">
                            <h3>{course.courseName}</h3>
                            <span className="price">₹{course.price}</span>
                        </div>
                        <p className="description">{course.description}</p>

                        {isStudent && mode === 'available' && (
                            <button
                                className="enroll-btn"
                                onClick={() => handleEnroll(course._id || course.id)}
                            >
                                Enroll Now
                            </button>
                        )}
                        {isStudent && mode === 'enrolled' && (
                            <div className="enrolled-badge">✓ Enrolled</div>
                        )}
                    </div>
                ))
            )}
        </div>
    )
}