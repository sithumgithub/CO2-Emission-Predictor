import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function header() {
    return (
        <header className="header">
            <div className="header-left">
                <h1>EmissionGuard</h1>
            </div>
            <div className="header-right">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/predictor" className="nav-link">Predictor</Link>
            </div>
        </header>
    );
}


