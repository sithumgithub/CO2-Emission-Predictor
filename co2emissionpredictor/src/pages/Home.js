import React from 'react';
import './Home.css';


export default function Home() {
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
                <button type='submit' onSubmit={''} >Sign In</button>
                </div>
            </div>

            <div className="container2">
                <span className="co2"><b>CO2</b> Emission Rating by</span>
                <span className="Vehicles">Vehicles</span>
                <br></br>
                <button type='submit' onSubmit={''} >LogIn</button>
                <div className='social-login'>
                    {/* <img src=''></img>
                    <img src=''></img>
                    <img src=''></img> */}
                </div>
            </div>
           
        </div>
        
     </div>
     
        </>
        
    );
}
