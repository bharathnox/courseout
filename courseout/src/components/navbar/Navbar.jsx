import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    // Show logout if they have a teacher context or are on a dashboard
    const isLoggedIn = !!localStorage.getItem('teacherId') ||
        location.pathname.includes('/teachers') ||
        location.pathname.includes('/student');

    const handleLogout = () => {
        localStorage.removeItem('teacherId');
        localStorage.removeItem('studentId');
        // In a full app, you'd also call a backend endpoint to clear the HTTP-only cookie.
        navigate('/');
    }

    const handleLogoClick = (e) => {
        e.preventDefault();
        if (localStorage.getItem('teacherId')) {
            navigate('/teachers');
        } else if (localStorage.getItem('studentId')) {
            navigate('/students');
        } else {
            navigate('/');
        }
    }

    return (
        <nav className='navbar'>
            <div className='navdiv'>
                <a href="/" onClick={handleLogoClick} className="logo-link">
                    <img src={logo} alt="CourseOut Logo" className="logo-img" />
                    <h1>CourseOut</h1>
                </a>
                <ul className='items'>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Know Us</li>
                    <li>Help</li>
                    {isLoggedIn && (
                        <li>
                            <button onClick={handleLogout} className="logout-btn">Logout</button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    )
}