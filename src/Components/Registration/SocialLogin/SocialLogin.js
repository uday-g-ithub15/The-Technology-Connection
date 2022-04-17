import React from 'react';
import './SocialLogin.css'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook, BsGithub} from 'react-icons/bs'

const SocialLogin = () => {
    return (
        <div className='social-login-container'>
              <button><p><FcGoogle className='icon google'/></p> <p>Google</p></button>
              <button><p><BsFacebook className='icon facebook'/></p> <p>Facebook</p></button>
              <button><p><BsGithub className='icon gitgub'/></p> <p>Github</p></button>
              {/* <button><span><FcGoogle className='icon'/></span> Google</button>
              <button><span><BsFacebook className='icon'/></span> Facebook</button>
              <button><span><BsGithub className='icon'/></span> Github</button> */}
        </div>
    );
};

export default SocialLogin;