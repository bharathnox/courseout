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
        <>
            <div className='hero1'>
                <h1>If you are a professor / Teacher</h1>
                <p>Sign-in if you already have an account</p>
                <p>Sign-up to create an account</p>
                <button onClick={handleSignuptr}>Sign-Up</button>
                <button onClick={handleLogintr}>Log-In</button>
            </div>
        </>
    )
}