import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const activeLinkStyle = ({isActive}) => {
        return {
            backgroundColor: isActive ? 'tomato' : '',
            color:isActive ? 'white' : ''
        }
    }
    return (
        <nav>
            <div className="photography-brand">
                <h3><span>Candid</span> Shots</h3>
            </div>
            <div className="nav-items">
                <NavLink   style={activeLinkStyle} to={'/'}>Home</NavLink> 
                <NavLink   style={activeLinkStyle} to={'/Services'}>Services</NavLink> 
                <NavLink   style={activeLinkStyle} to={'/about'}>About</NavLink> 
                <NavLink   style={activeLinkStyle} to={'/login'}>Login</NavLink> 
                <NavLink   style={activeLinkStyle} to={'/register'}>Register </NavLink> 
            </div>
        </nav>
    );
};

export default Header;