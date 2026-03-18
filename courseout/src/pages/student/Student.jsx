import './Student.css'
import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import AvailableCourses from '../../components/availableCourses/AvailableCourses'
import Footer from '../../components/footer/Footer'

export default function Student() {
    const [activeTab, setActiveTab] = useState('available'); // 'available' or 'enrolled'
    const studentId = localStorage.getItem('studentId');

    return (
        <>
            <Navbar />
            <div className="studentdiv">
                <div className="dashboard-header">
                    <h2 className='available'>
                        {activeTab === 'available' ? 'Available Courses' : 'My Learning'}
                    </h2>
                    <div className="tab-toggle glass">
                        <button
                            className={`toggle-btn ${activeTab === 'available' ? 'active' : ''}`}
                            onClick={() => setActiveTab('available')}
                        >
                            Catalog
                        </button>
                        <button
                            className={`toggle-btn ${activeTab === 'enrolled' ? 'active' : ''}`}
                            onClick={() => setActiveTab('enrolled')}
                        >
                            My Learning
                        </button>
                    </div>
                </div>

                <AvailableCourses
                    isStudent={true}
                    studentId={studentId}
                    mode={activeTab}
                    setActiveTab={setActiveTab}
                />
            </div>
            <Footer />
        </>
    )
}