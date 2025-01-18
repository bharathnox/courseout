import './Teacher.css'
import Navbar from '../../components/navbar/Navbar'
import Course from '../../courses/Course'
import AvailableCourses from '../../components/availableCourses/AvailableCourses'
export default function Teacher() {
    return(
        <>
            <Navbar/>
            <div className='teacherdiv'>
                <div>
                    <h2 className='yourcour'>Your Courses</h2>
                    <AvailableCourses/>
                </div>
                <Course/>
            </div>
        </>
    )
}
