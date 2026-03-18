import './Teacher.css'
import Navbar from '../../components/navbar/Navbar'
import Course from '../../courses/Course'
import AvailableCourses from '../../components/availableCourses/AvailableCourses'
import Footer from '../../components/footer/Footer'

export default function Teacher() {
    const teacherId = localStorage.getItem('teacherId');
    return (
        <>
            <Navbar />
            <div className='teacherdiv'>
                <div className="teacher-courses-section">
                    <h2 className='yourcour'>Your Courses</h2>
                    <AvailableCourses teacherId={teacherId} />
                </div>
                <Course />
            </div>
            <Footer />
        </>
    )
}
