import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navdiv'>
                    <h1><a href="/">© - CourseOut</a></h1>
                    <ul className='items'>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Know Us</li>
                        <li>Help</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}