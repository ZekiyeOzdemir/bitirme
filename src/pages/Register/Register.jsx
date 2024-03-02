import React from 'react'
import './Register.css'
import RegisterComp from '../../components/Register/RegisterComp'
import Welcome from '../../components/Welcome/Welcome'

function Register() {
  return (
    <div className='register'>
        <RegisterComp  />
        <Welcome />
    </div>
  )
}

export default Register