import { useNavigate } from 'react-router-dom'
import './StdLog.css'

export default function StdLog() {

    const navigate = useNavigate()

    const handleSignup = () => {
        navigate('/signup')
    }
    const handleLogin = () => {
        navigate('/login')
    }
    return (
        <>
            <div className='hero2'>
                <h1>If you are a student</h1>
                <p>Sign-in if you already have an account</p>
                <p>Sign-up to create an account</p>
                <button onClick={handleSignup}>Sign-Up</button>
                <button onClick={handleLogin}>Log-In</button>
            </div>
        </>
    )
}