import './Logintr.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'

export default function Logintr() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleLogintr = (e) => {
        e.preventDefault();
        setError('')
        axios.post('https://courseout.onrender.com/logintr', { email, password })
            .then(result => {
                console.log(result)
                localStorage.setItem('teacherId', result.data.userTr._id);
                navigate('/teachers')
            })
            .catch(err => {
                console.log(err)
                setError(err.response?.data || "An error occurred during login")
            })
    }
    return (
        <>
            <Navbar />
            <div className='logintrdiv'>
                <form onSubmit={handleLogintr} className='logintrform'>
                    {error && <p style={{ color: '#ef4444', background: '#fee2e2', padding: '10px', borderRadius: '6px', border: '1px solid #f87171', margin: '0 0 15px 0', fontSize: '14px', textAlign: 'center' }}>{error}</p>}
                    <label>Email</label>
                    <input type="email" placeholder='Enter your email' required onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" placeholder='Enter your password' required onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="Login" />
                </form>
            </div>
        </>
    )
}