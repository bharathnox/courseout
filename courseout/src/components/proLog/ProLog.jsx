import { useNavigate } from 'react-router-dom'
import './ProLog.css'

export default function ProLog() {
    const navigate = useNavigate();

    const handleSignuptr = () => {
        navigate('/signuptr')
    }

    const handleLogintr = () => {
        navigate('/logintr')
    }

    return (
        <div className='auth-card prolog-card'>
            <h1>For Instructors</h1>
            <p>Ready to share your knowledge?</p>
            <div className="auth-buttons">
                <button onClick={handleLogintr} className="btn-secondary">Log-In</button>
                <button onClick={handleSignuptr}>Sign-Up</button>
            </div>
        </div>
    )
}