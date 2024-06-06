import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gmailIcon from '../../assests/gmail.png';
import facebookIcon from '../../assests/facebook.png';
import xIcon from '../../assests/x.png';
import './Login.css'; // If you have a CSS file for the login component

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API)
        console.log('Form submitted:', formData);
    };

    const handleSignUpClick = () => {
        navigate('/signup')
    };
    return (
        <>
        {/* <Signup /> */}
        <div className="home-background">
        <div className="overlay">
        <div className='second-cont'>
        <div className="container3">
         <div className="left-container">
            <span className="welcometext">WELCOME TO</span><br></br>
            <span className="Emssiontext">EmissionGuard</span>
            </div>
            <div className="right-container">
            <button type='submit' onClick={handleSignUpClick} ><b>Sign In</b></button>
            </div>
         </div> 
           
        <div className="signin-container">
        <form onSubmit={handleSubmit} className="signin-form">
            <h2>Log In</h2>
            
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="signin-button">Log In</button>
           <br></br>
            <div className='social-login1'>
                <img src={gmailIcon} alt="Gmail" className="gmail-icon" />
                <img src={facebookIcon} alt="Facebook" className="facebook-icon" />
                <img src={xIcon} alt="X" className="x-icon" />
            </div>
        </form>
    </div>
        </div>
</div> 
</div>
    </>
    );
}

export default Login;