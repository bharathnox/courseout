import './Student.css'
import Navbar from '../../components/navbar/Navbar'
import AvailableCourses from '../../components/availableCourses/AvailableCourses'
export default function Student() {
  
    return(
        <>
            <Navbar/>
            <h2 className='available'>Available courses</h2>
            <AvailableCourses/>
        </>
    )
}