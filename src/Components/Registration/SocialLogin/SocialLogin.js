import React from 'react';
import './SocialLogin.css'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook, BsGithub} from 'react-icons/bs'
import {useSignInWithGoogle, useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
const SocialLogin = () => {
    const [user] = useAuthState(auth)
    const [signInWithGoogle,loading] = useSignInWithGoogle(auth);
    if(loading){
        return (
            <p>Loading ...</p>
        )
    }
    if(user){
        return (
            <p>{user?.email}</p>
        )
    }
    return (
        <div className='social-login-container'>
              <button onClick={() => signInWithGoogle()}><p><FcGoogle className='icon google'/></p> <p>Google</p></button>
              <button><p><BsFacebook className='icon facebook'/></p> <p>Facebook</p></button>
              <button><p><BsGithub className='icon gitgub'/></p> <p>Github</p></button>
        </div>
    );
};

export default SocialLogin;