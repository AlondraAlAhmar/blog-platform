import React from 'react';
import {auth, provider} from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import gmail from './gmail.png';

function Login({setIsAuth}){

  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result)=>{
    localStorage.setItem("isAuth",true);
    setIsAuth(true);
    navigate("/");
    })
  };

  return (
    <div className='loginPage'>
      <p>
        Sign In To Continue
      </p>

      <button className='login-btn' onClick={signInWithGoogle}><img src={gmail} className='gmailIcon'/>Sign in with Google</button>
    </div>
  );
}

export default Login;