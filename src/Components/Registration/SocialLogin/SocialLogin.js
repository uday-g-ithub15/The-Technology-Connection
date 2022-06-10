import React from 'react';
import './SocialLogin.css'
import { AiOutlineGoogle } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { useSignInWithGoogle, useAuthState, useSignInWithGithub } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
const SocialLogin = () => {
    const [user] = useAuthState(auth)
    const [signInWithGoogle, loading] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitLoading] = useSignInWithGithub(auth);
    if (loading || gitLoading) {
        return (
            <p>Loading ...</p>
        )
    }
    if (user) {
        return (
            <p>{user?.email}</p>
        )
    }
    return (
        <div className='social-login-container'>
            <button onClick={() => signInWithGoogle()}><p><AiOutlineGoogle className='icon google' /></p> <p>Google</p></button>
            <button onClick={() => signInWithGithub()}><p><BsGithub className='icon gitgub' /></p> <p>Github</p></button>
        </div>
    );
};

export default SocialLogin;