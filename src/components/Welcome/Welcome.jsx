import React from 'react'
import welcomevector from '../../assets/welcomevector.png'
import './Welcome.css'

function Welcome() {
  return (
    <div className='welcome welcome__wrapper'>
        <div className='x'>
        <img src={welcomevector} alt='vector' className='welcome__vector' />
        <h2>Welcome to ReklamAi.</h2>
        <h3>Lorem ipsum is simply</h3>
        </div>
    </div>
  )
}

export default Welcome