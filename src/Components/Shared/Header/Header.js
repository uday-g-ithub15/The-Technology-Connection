import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import {AiOutlineMenu} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'
import './Header.css';

const Header = () => {
    const [icon, setIcon] = useState(false);
    const [user] = useAuthState(auth);
    const logout = () =>{
        signOut(auth)
    }
    const activeLinkStyle = ({isActive}) => {
        
        return {
            backgroundColor: isActive ? 'rgba(88,65,169,0.77)' : '',
            color:isActive ? 'white' : ''
        }
    }
    return (
        <header>
        <div className='responsive-icon'>
                 <button onClick={() => setIcon(!icon)}>
                 {
                 icon ? <AiOutlineMenu/> : <ImCross/>
               }
               </button>
        </div>
        <nav className={icon ?'nav-close' : 'nav-open'}>
            <div className="connection">
                <h3>The <span>Technology</span> Connection</h3>
            </div>
            <div className="nav-items">
                <NavLink   style={activeLinkStyle} to={'/'}>Home</NavLink> 
                <NavLink  style={activeLinkStyle} to='/services' >Services</NavLink> 
                <NavLink   style={activeLinkStyle} to={'/blogs'}>Blogs</NavLink> 
                <NavLink   style={activeLinkStyle} to={'/about'}>About</NavLink> 
                {
                    user 
                    ?
                        <button onClick={logout} className='btn'>Sign Out</button>
                     :
                     <>
                     <NavLink   style={activeLinkStyle} to={'/login'}>Login</NavLink> 
                <NavLink   style={activeLinkStyle} to={'/register'}>Register </NavLink>
                </>
                } 
            </div>
            </nav>
            </header>
    );
};

export default Header;