import './Signuptr.css'
import Navbar from '../../components/navbar/Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Signuptr() {
    const [trName, setTrName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSignuptr = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5002/signuptr", {trName, email, password})
        .then(result => {
            console.log(result);
            navigate('/teachers')
        })
        .catch(err => console.log(err))
    }
    return(
        <>
            <Navbar/>
            <div className='signuptrdiv'>
                <form onSubmit={handleSignuptr} className='signuptrform'>
                    <label>Tutor Name</label>
                    <input type="text" placeholder='Enter your name' required onChange={(e) => setTrName(e.target.value)}/>
                    <label>Tutor Email</label>
                    <input type="email" placeholder='Enter your email' required onChange={(e) => setEmail(e.target.value)} />
                    <label>Tutor Password</label>
                    <input type="password" placeholder='Enter your password' required onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        </>
    )
}