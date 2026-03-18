import { useNavigate } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
    const navigate = useNavigate()

    const SignInPage = () => {
        navigate('/loginpage')
    }

    return (
        <div className='landingdiv'>
            <div className='hero'>
                <h1>CourseOut is a platform where anyone can seek or supply courses</h1>
                <p>Unlock your potential with premium learning experiences and cutting-edge courses.</p>
                <button onClick={SignInPage} className='cta-button'>Get Started Now</button>
            </div>

            <div className='cards-container'>
                <div className='benefits card'>
                    <h2>For Instructors</h2>
                    <ul>
                        <li><span className="icon">{"->"}</span> Easy and efficient course delivery</li>
                        <li><span className="icon">{"->"}</span> Share your passion with a global audience</li>
                        <li><span className="icon">{"->"}</span> Earn by selling your premium content</li>
                    </ul>
                </div>
                <div className='stdbenefits card'>
                    <h2>For Students</h2>
                    <ul>
                        <li><span className="icon">{"->"}</span> Learn at your own pace with top courses</li>
                        <li><span className="icon">{"->"}</span> High-quality content curated for you</li>
                        <li><span className="icon">{"->"}</span> Upskill and reach your career goals</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}