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
        <div className='auth-card stdlog-card'>
            <h1>For Students</h1>
            <p>Ready to start learning?</p>
            <div className="auth-buttons">
                <button onClick={handleLogin} className="btn-secondary">Log-In</button>
                <button onClick={handleSignup}>Sign-Up</button>
            </div>
        </div>
    )
}