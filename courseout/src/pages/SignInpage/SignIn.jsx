import './SignIn.css'
import ProLog from '../../components/proLog/ProLog'
import StdLog from '../../components/stdLog/StdLog'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

export default function SignIn() {
    return (
        <>
            <Navbar />
            <div className="signin-page">
                <div className="logs-container">
                    <ProLog />
                    <div className="divider"><span>OR</span></div>
                    <StdLog />
                </div>
            </div>
            <Footer />
        </>
    )
}