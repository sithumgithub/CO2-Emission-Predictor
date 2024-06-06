import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-divider"></div>
            <div className="footer-content">
                <div className="left-container">
                    <p className="left-text">© 2024 All rights reserved.<br></br>
                                Developed by Cyber Knight.<br></br>
                                Privacy Policy | Terms of Service | Contact Us
                    </p>
                </div>
                <div className="right-container">
                    <p className="right-text">Follow us on: Facebook | Instagram | Twitter</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
