
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gmailIcon from '../../assests/gmail.png';
import facebookIcon from '../../assests/facebook.png';
import xIcon from '../../assests/x.png';
import './signUp.css';



export default function Signup(){

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

    const handleLoginClick = () => {
        navigate('/login')
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
                <button type='submit' onClick={handleLoginClick} ><b>LogIn</b></button>
                </div>
             </div> 
               
            <div className="signin-container">
            <form onSubmit={handleSubmit} className="signin-form">
                <h2>Sign In</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <div className="input-with-icon">
                    <img src={xIcon} alt="Email Icon" className="input-icon" />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Type your name" 
                        required
                    />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email" >Email</label>
                    <div className="input-with-icon">
                    <img src={gmailIcon} alt="Email Icon" className="input-icon" />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Type your email" 
                        required
                    />
                   </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="input-with-icon">
                    <img src={facebookIcon} alt="Email Icon" className="input-icon" />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Type your password" 
                        required
                    />
                </div>
                </div>
                <button type="submit" className="signin-button">Sign In</button>
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
