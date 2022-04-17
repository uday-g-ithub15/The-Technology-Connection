import React from 'react';
import '../Register/Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className='register-container'>
        <h2 style={{color:'dodgerblue'}}>Please Register</h2>
            <form className='register-form-container'>
                <input type="email" name="" id=""  placeholder='Enter your email'/>
                <input type="password" name="" id=""  placeholder='Enter your password'/>
                <input type="submit" value="Login" />
            </form>
            <div className="hr-line-container">
            <div className='hr-line'></div> Or <div className='hr-line'></div>
            </div>
            <SocialLogin/>
    </div>
    );
};

export default Login;