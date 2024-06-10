
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gmailIcon from '../../assests/gmail.png';
import facebookIcon from '../../assests/facebook.png';
import xIcon from '../../assests/x.png';
import './signUp.css';

import axios from 'axios';



export default function Signup(){

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
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

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/users', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Response:', response.data);

            if (response.data.success) {
                setFormData({
                    username: '',
                    email: '',
                    password: ''
                });
                navigate('/login');
            } else {
                alert('Signup failed: ' + response.data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during signup.');
        }
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
                    <label htmlFor="username">Name</label>
                    <div className="input-with-icon">
                    <img src={xIcon} alt="Email Icon" className="input-icon" />
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
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
