import './Footer.css'

export default function Footer() {
    return (
        <div className='footerdiv'>
            <div className="footer-content">
                <div className="footer-brand">
                    <p>© CourseOut</p>
                </div>
                <ul className='footeritems'>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Security</li>
                    <li>Status</li>
                    <li>Docs</li>
                    <li>Manage Cookies</li>
                </ul>
            </div>
        </div>
    )
}