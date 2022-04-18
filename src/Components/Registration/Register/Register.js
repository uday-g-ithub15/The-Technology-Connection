import React, { useRef, useState } from 'react';
import { useAuthState,  useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import {  NavLink, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'
import '../../SharedClass/Btn.css'

const Register = () => {
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile] = useUpdateProfile(auth);
    const [error, setError] = useState('')
    const[user]= useAuthState(auth);
    const navigate = useNavigate();
    const refName = useRef(null);
    const refEmail = useRef(null);
    const refPass = useRef(null);
    const refConfirmPass = useRef(null);
    const formSubmit = async (e) => {
        e.preventDefault();
        const name = refName.current.value;
        const email = refEmail.current.value;
        const pass = refPass.current.value;
        const confirmPass = refConfirmPass.current.value;
        if(pass !==confirmPass){
            setError("Password doesn't matched");
            return;
        }
        setError('')
        await createUserWithEmailAndPassword(email,pass);
        await updateProfile({displayName:name});
        }
    if(user){
        console.log(user);
        navigate('/')
    }

    return (
        <div className='register-container'>
            <h2 style={{color:'dodgerblue'}}>Please Register</h2>
                <form onSubmit={formSubmit} className='register-form-container'>
                    <input ref={refName} type="text" name="" id=""  placeholder='Enter your name' required/>
                    <input ref={refEmail} type="email" name="" id=""  placeholder='Enter your email' required/>
                    <input ref={refPass} type="password" name="" id=""  placeholder='Enter your password' required/>
                    <input ref={refConfirmPass} type="password" name="" id="" placeholder='Enter your confirm password' required />
                    {error}
                    <button className='btn'>Register</button>
                </form>
                <p>Already have account ? <NavLink  to={'/login'}>Please Login</NavLink></p>
                <div className="hr-line-container">
                <div className='hr-line'></div> Or <div className='hr-line'></div>
                </div>
                <SocialLogin/>
        </div>
    );
};
export default Register;