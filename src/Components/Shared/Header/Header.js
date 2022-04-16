import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div className="photography-brand">
                <h3><span>Candid</span> Shots</h3>
            </div>
            <div className="nav-items">
                <Link to={'/'}>Home</Link> 
                <Link to={'/Services'}>Services</Link> 
                <Link to={'/about'}>About</Link> 
                <Link to={'/login'}>Login</Link> 
                <Link to={'/register'}>Register </Link> 
            </div>
        </nav>
    );
};

export default Header;