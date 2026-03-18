import './Signup.css'
import Navbar from '../../components/navbar/Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {
    const [stdName, setStdName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSignup = (e) => {
        e.preventDefault();
        setError('')
        axios.post("https://courseout.onrender.com/signup", { stdName, email, password })
            .then(result => {
                console.log(result);
                localStorage.setItem('studentId', result.data._id);
                navigate('/students')
            })
            .catch(err => {
                console.log(err)
                setError(err.response?.data || "An error occurred during signup")
            })
    }
    return (
        <>
            <Navbar />
            <div className='signupdiv'>
                <form onSubmit={handleSignup} className='signupform'>
                    {error && <p style={{ color: '#ef4444', background: '#fee2e2', padding: '10px', borderRadius: '6px', border: '1px solid #f87171', margin: '0 0 15px 0', fontSize: '14px', textAlign: 'center' }}>{error}</p>}
                    <label>Student Name</label>
                    <input type="text" placeholder='Enter your name' required onChange={(e) => setStdName(e.target.value)} />
                    <label>Student Email</label>
                    <input type="email" placeholder='Enter your email' required onChange={(e) => setEmail(e.target.value)} />
                    <label>Student Password</label>
                    <input type="password" placeholder='Enter your password' required onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        </>
    )
}