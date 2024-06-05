import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-divider"></div>
            <div className="footer-content">
                <div className="left-container">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
                <div className="right-container">
                    <p>Contact us: info@yourcompany.com</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
