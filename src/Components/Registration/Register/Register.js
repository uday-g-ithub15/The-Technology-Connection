import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'

const Register = () => {
    return (
        <div className='register-container'>
            <h2 style={{color:'dodgerblue'}}>Please Register</h2>
                <form className='register-form-container'>
                    <input type="text" name="" id=""  placeholder='Enter your name'/>
                    <input type="email" name="" id=""  placeholder='Enter your email'/>
                    <input type="password" name="" id=""  placeholder='Enter your password'/>
                    <input type="password" name="" id="" placeholder='Enter your confirm password' />
                    <input type="submit" value="Register" />
                </form>
                <div className="hr-line-container">
                <div className='hr-line'></div> Or <div className='hr-line'></div>
                </div>
                <SocialLogin/>
        </div>
    );
};

export default Register;