import React, { useRef } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword,  } from 'react-firebase-hooks/auth';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import '../Register/Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [signInWithEmailAndPassword,loading] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
        const[user]= useAuthState(auth);
    const navigate = useNavigate();
    const refEmail = useRef(null);
    const refPass = useRef(null);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const formSubmit =  (e) => {
        e.preventDefault();
        const email = refEmail.current.value;
        const pass = refPass.current.value;
        signInWithEmailAndPassword(email, pass);
        }
            if(user){
                navigate(from, {replace:true});
            }
            if(loading){
                return <p>Loading ...</p>
            }
            const resetPassword = async () => {
                const email = refEmail.current.value;
                if (email) {
                    await sendPasswordResetEmail(email);
                    toast('Sent Email');
                }
                else{
                    toast('Please enter your email address');
                }
            }
    return (
        <div className='register-container'>
        <h2 style={{color:'dodgerblue'}}>Please Login</h2>
            <form onSubmit={formSubmit} className='register-form-container'>
                <input required  ref={refEmail} type="email" name="" id=""  placeholder='Enter your email'/>
                <input  required ref={refPass} type="password" name="" id=""  placeholder='Enter your password'/>
                <input type="submit" value="Login" />
            </form>
            <p>Don't have any account? <NavLink to={'/register'}>Please Register</NavLink> or <button style={{border:'none',color:'dodgerblue',textDecoration:'underline',padding:'3px',cursor:'pointer',backgroundColor:'aliceblue'}} onClick={resetPassword}>Reset Password</button> </p>
            <div className="hr-line-container">
            <div className='hr-line'></div> Or <div className='hr-line'></div>
            </div>
            <SocialLogin/>
            <ToastContainer/>
    </div>
    );
};

export default Login;