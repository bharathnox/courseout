import './SignIn.css'
import ProLog from '../../components/proLog/ProLog'
import StdLog from '../../components/stdLog/StdLog'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
export default function SignIn() {
    return(
        <>
            <Navbar/>
            <div className="logs">
                <ProLog/>
                <div className="vl"></div>
                <StdLog/>
            </div>
            <Footer/>
        </>
    )
}