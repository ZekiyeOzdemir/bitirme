import React from 'react';
import LoginComp from '../../components/Login/LoginComp'
import Welcome from '../../components/Welcome/Welcome'
import './Login.css'

function Login() {
  return (
    <div className='login'>
        <LoginComp  />
        <Welcome />
    </div>
  )
}

export default Login