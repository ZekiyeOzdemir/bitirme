import React from 'react';
import './RegisterComp.css';
import loginemail from '../../assets/loginemail.png';
import loginpassword from '../../assets/loginpassword.png';
import registeruser from '../../assets/registeruser.png';
import { Link, useNavigate  } from 'react-router-dom';
import axios from 'axios';


function RegisterComp() {
  const[email, setEmail] = React.useState('');
  const[username, setUsername] = React.useState('');
  const[password, setPassword] = React.useState('');

  const navigation = useNavigate();

  //axios instance olusturmadan 
/*   const handleSubmit = async(e) => {
    e.preventDefault(); //to prevent page to refresh 
    
    const payload = {
      username: username,
      email: email,
      password: password,
    }
    
    try {
      const response = await axios.post('http://localhost:8080/api/users/register', payload);
      console.log("Response: ", response.data);
      handleClearForm();
      navigation('/login');
    } catch (error) {
      console.log('Error while registering user: ', error);
    }
  } */
  const handleSubmit = async(e) => {
    e.preventDefault(); //to prevent page to refresh 
    
    const payload = {
      username: username,
      email: email,
      password: password,
    }
    
    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', payload);
      console.log("Response: ", response.data);
      handleClearForm();
      navigation('/login');
    } catch (error) {
      console.log('Error while registering user: ', error);
    }
  }

  const handleClearForm = () => {
    setEmail('');  
    setUsername(''); 
    setPassword(''); 
  }

  return (
    <div className='registercomp registercomp__wrapper'>
    <h2 className='registercomp__h2'>Sign up</h2>
    <h3 className='registercomp__h3'>If you have an account login</h3>
    <h3 className='registercomp__h3-second'>You can <span className='logincomp__span'><Link to="/login">Login here !</Link></span></h3>
    <form className='registercomp__form'
    onSubmit={(e)=>handleSubmit(e)}
    >
      <div className='registercomp__email input__wrapper'>
      <label htmlFor="email" className='registercomp__label'>Email</label>
      <input type="email" id="email" placeholder="Enter your email address" className='registercomp__input'
      value={email}
      onChange={(event) => setEmail(event.target.value)}
      />
      <img src={loginemail} alt='emaillogo' />
      </div>
      
      <div className='registercomp__username input__wrapper'>
      <label htmlFor="user" className='registercomp__label'>Username</label>
      <input type="text" id="user" placeholder="Enter your username" className='registercomp__input'
      value={username}
      onChange={(event) => setUsername(event.target.value)}
      />
      <img src={registeruser} alt='userlogo' />
      </div>

      <div className='registercomp__password input__wrapper'>
      <label htmlFor="password" className='registercomp__label'>Password</label>
      <input type="password" id="password" placeholder="Enter your password" className='registercomp__input'
      value={password}
      onChange={(event) => setPassword(event.target.value)}
      />
      <img src={loginpassword} alt='passlogo' />
      </div>

      <button className='registercomp__button'
      type='sub'
      disabled={!email || !password || !username}
      >Signup</button>
    </form>
  </div>
  )
}

export default RegisterComp