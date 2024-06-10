import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import gmailIcon from '../assests/gmail.png';
import facebookIcon from '../assests/facebook.png';
import xIcon from '../assests/x.png';
import Footer from '../components/footer/Footer';



export default function Home() {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login')
    };
    const handleSignUpClick = () => {
        navigate('/signup')
    };
    const handlePredictionUpClick = () => {
        navigate('/prediction')
    };


    return (
        <>
            {/* <Signup /> */}
            <div className="home-background">
            <div className="overlay">
            <div className="container1">
            <div className="left-container">
                <span className="welcometext">WELCOME TO</span><br></br>
                <span className="Emssiontext">EmissionGuard</span>
                </div>
                <div className="right-container">
                <button type='submit' onClick={handleSignUpClick} ><b>Sign Up</b></button>
                <button type='submit' onClick={handlePredictionUpClick} ><b>Predictor</b></button>
                </div>
            </div>

            <div className="container2">
                <span className="co2"><b>CO2</b> Emission Rating by</span>
                <span className="Vehicles">Vehicles</span>
                <br></br>
                <button type='button' onClick={handleLoginClick}><b>Login</b></button>
                <br></br>
                <div className='social-login'>
                    <img src={gmailIcon} alt="Gmail" className="gmail-icon" />
                    <img src={facebookIcon} alt="Facebook" className="facebook-icon" />
                    <img src={xIcon} alt="X" className="x-icon" />
                </div>
            </div>
           
        </div>
        <Footer/>
     </div>
   
        </>
        
    );
}
