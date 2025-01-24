import { useNavigate } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
    const navigate = useNavigate()

    const SignInPage = () => {
        navigate('/loginpage')
    }

    return(
        <>
            <div className='landingdiv'>
                <h1>CourseOut is a platform where anyone can seek or supply courses</h1>
                <div className='benefits'>
                    <h2>Benefits as a course supplier</h2>
                    <ol>
                        <li>➵ Easy and efficient to delever your courses to students</li>
                        <li>➵ If you are passionate to educate people, this is the place for you to deliver your content</li>
                        <li>➵ Get benifit by selling your courses here..</li>
                    </ol>
                </div>
                <div className='stdbenefits'>
                    <h2>Benefits as a student</h2>
                    <ol>
                        <li>➵ Easy and efficient to learn with your desired courses</li>
                        <li>➵ If you are passionate to learn, this is the place where you can get a quality content</li>
                        <li>➵ Get benifit by learning with the courses here..</li>
                    </ol>
                </div>
                <button onClick={SignInPage}>Sign-In / Log-In</button>
            </div>
        </>
    )
}