import './Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'

export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5002/login', {email, password})
        .then(result => {
            console.log(result)
            navigate('/students')
        })
        .catch(err => console.log(err))
    }
    return(
        <>
            <Navbar/>
            <div className='logindiv'>
                <form onSubmit={handleLogin} className='loginform'>
                    <label>Email</label>
                    <input type="email" placeholder='Enter your email' required onChange={(e) => setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" placeholder='Enter your password' required onChange={(e) => setPassword(e.target.value)}/>
                    <input type="submit" value="Login" />
                </form>
            </div>
        </>
    )
}