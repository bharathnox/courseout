import './Signup.css'
import Navbar from '../../components/navbar/Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Signup () {
    const [stdName, setStdName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSignup = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5002/signup", {stdName, email, password})
        .then(result => {
            console.log(result);
            navigate('/students')
        })
        .catch(err => console.log(err))
    }
    return(
        <>
            <Navbar/>
            <div className='signupdiv'>
                <form onSubmit={handleSignup} className='signupform'>
                    <label>Student Name</label>
                    <input type="text" placeholder='Enter your name' required onChange={(e) => setStdName(e.target.value)}/>
                    <label>Student Email</label>
                    <input type="email" placeholder='Enter your email' required onChange={(e) => setEmail(e.target.value)} />
                    <label>Student Password</label>
                    <input type="password" placeholder='Enter your password' required onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        </>
    )
}