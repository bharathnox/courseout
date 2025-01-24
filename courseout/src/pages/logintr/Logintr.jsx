import './Logintr.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'

export default function Logintr() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleLogintr = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5002/logintr', {email, password})
        .then(result => {
            console.log(result)
            navigate('/teachers')
        })
        .catch(err => console.log(err))
    }
    return(
        <>
            <Navbar/>
            <div className='logintrdiv'>
                <form onSubmit={handleLogintr} className='logintrform'>
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