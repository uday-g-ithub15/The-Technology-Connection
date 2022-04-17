import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () =>{
        signOut(auth)
    }
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
                {
                    user 
                    ?
                        <button onClick={logout} >Sign Out</button>
                     :
                     <>
                     <NavLink   style={activeLinkStyle} to={'/login'}>Login</NavLink> 
                <NavLink   style={activeLinkStyle} to={'/register'}>Register </NavLink>
                </>
                } 
            </div>
        </nav>
    );
};

export default Header;