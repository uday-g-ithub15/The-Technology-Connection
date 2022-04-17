import React, { useRef } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import '../Register/Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const[user]= useAuthState(auth);
    const navigate = useNavigate();
    const refEmail = useRef(null);
    const refPass = useRef(null);
    const formSubmit = async (e) => {
        e.preventDefault();
        const email = refEmail.current.value;
        const pass = refPass.current.value;
        signInWithEmailAndPassword(email, pass);
        }
    if(user){
        console.log(user);
        navigate('/')
    }
    return (
        <div className='register-container'>
        <h2 style={{color:'dodgerblue'}}>Please Login</h2>
            <form onSubmit={formSubmit} className='register-form-container'>
                <input ref={refEmail} type="email" name="" id=""  placeholder='Enter your email'/>
                <input ref={refPass} type="password" name="" id=""  placeholder='Enter your password'/>
                <input type="submit" value="Login" />
            </form>
            <p>Don't have any account? <NavLink to={'/register'}>Please Register</NavLink></p>
            <div className="hr-line-container">
            <div className='hr-line'></div> Or <div className='hr-line'></div>
            </div>
            <SocialLogin/>
    </div>
    );
};

export default Login;