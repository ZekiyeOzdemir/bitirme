import React from 'react';
import './LoginComp.css';
import loginemail from '../../assets/loginemail.png';
import loginpassword from '../../assets/loginpassword.png';
import loginvisible from '../../assets/logininvisible.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function LoginComp() {
  const[username, setUsername] = React.useState('');
  const[password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const navigation = useNavigate();
  /* const handleSubmit = async(e) => {
    e.preventDefault();
    
    const payload = {
      email: email,
      password: password
    }

    try {
      const response = await axios.post('http://localhost:8080/api/users/login', payload);
      const data = response.data;
      console.log(data);
      if (data.successful) {
        const userId = data.userId;
        localStorage.setItem('userId', userId);
        console.log("Response: ", data.message);
        navigation('/');
      } else {
        console.log("Error while login user: ", data.message);
      }
      // console.log("userId", userId);
      localStorage.setItem('userId', userId);
      

      console.log("Response: ", response.data);
      navigation('/'); //gonna clear form when push the navigation
    } catch (error) {
      console.log("Error while login user: ", error);
    }
  } */
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const payload = {
      username: username,
      password: password
    }

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', payload);
      localStorage.setItem('token', response?.data?.token)
      const data = response.data;
      console.log(data);
      navigation('/'); //gonna clear form when push the navigation

    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Invalid email or password.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  }

  return (
    <div className='logincomp logincomp__wrapper'>
      <h2 className='logincomp__h2'>Sign in</h2>
      <h3 className='logincomp__h3'>If you don't have an account register</h3>
      <h3 className='logincomp__h3-second'>You can <span className='logincomp__span' href=""><Link to="/register">Register here !</Link></span></h3>
      <form className='logincomp__form'
      onSubmit={(e)=>handleSubmit(e)}
      >

        <div className='logincomp__email input__wrapper'>
        <label htmlFor="email" className='logincomp__label'>Username</label>
        <input type="text" id="email" placeholder="Enter your username" className='logincomp__input'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <img src={loginemail} alt='emaillogo' />
        </div>

        <div className='logincomp__password input__wrapper'>
        <label htmlFor="password" className='logincomp__label'>Password</label>
        <input type="password" id="password" placeholder="Enter your password" className='logincomp__input'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <img src={loginpassword} alt='passlogo' />
        {/* <img src={loginvisible} alt='passlogo' /> */}
        </div>

        <p className="error-message">{error}</p>

        <a href="">Forget Password?</a>
        <button className='logincomp__button'>Login</button>
      </form>
    </div>
  )
}

export default LoginComp