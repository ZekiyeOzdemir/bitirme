import React, {useState} from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import './Navbar.css';
import logo from '../../assets/Jadoo.jpg';
import dropdownarrow from '../../assets/dropdownarrow.png';


import {Link} from "react-router-dom";
function Navbar(props) {
  const[toggleMenu, setToggleMenu] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  return (
    <nav className='navbar'>
     <div className='navbar-logo'>
       <img src={logo} alt="logo"/>
     </div>
     <ul className='navbar-links'>
        <li className='header_poppins'><a href="#home">Anasayfa</a></li>
        <li className='header_poppins'><a href='#hakkimizda'>Hakkımızda</a></li>
        <li className='header_poppins'><a href='#analiz'>Analiz</a></li>
        <li className='header_poppins'><a href='#kesfet'>Keşfet</a></li>
     </ul>
     
     <div className='navbar-logingroup'>
     {!props.username ? (
        <>
          <button className='navbar-login'><Link to="/login">Giriş Yap</Link></button>
          <button className='navbar-signin'><Link to="/register">Kaydol</Link></button>
        </>
      ) : 
      // <button className='navbar-loggedin' onClick={()=>{localStorage.clear(); window.location.reload();}}>{ props.username }</button>
      <>
      {/* <a className='navbar-loggedin'>{ props.username }</a>
      <ul className='dropdown'>
        <li className='profile'> <span><Link to="/login">Profil</Link></span></li>
        <li className='profile'> <span>Çıkış Yap</span></li>
      </ul> */}
      <div className={`select-menu ${isActive ? 'activeNavbar' : ''}`}>
      <div className="select-btn" onClick={() => setIsActive(!isActive)}>
      <span className="sBtn-text">Hoşgeldin <span className='propsusername'>{props.username}</span></span>
        <img src={dropdownarrow} alt='arrow' />
      </div>
      <ul className="options">
        <li className='option'><span className='option-text'><Link to="/profile/user">Profil</Link></span></li>
        <li className='option'><span className='option-text' onClick={()=>{localStorage.clear(); window.location.reload();}}>Çıkış Yap</span></li>
      </ul>
    </div>
      </>
      }
     </div>
     

     <div className='navbar-hamburgermenu'>
      <RxHamburgerMenu fontSize={28} onClick={() => {setToggleMenu(true)}}/>

      { toggleMenu && (    
      <div className='navbar-hamburgermenu_overlay flex__center slide-bottom'>
        <IoCloseSharp fontSize={27} className='overlay__close' onClick={() => {setToggleMenu(false)}}/>
      <ul className='navbar__hamburgermenu-links'>
        <li className='header_poppins'><a href="#home">Anasayfa</a></li>
        <li className='header_poppins'><a href='#hakkimizda'>Hakkımızda</a></li>
        <li className='header_poppins'><a href='#analiz'>Analiz</a></li>
        <li className='header_poppins'><a href='#kesfet'>Keşfet</a></li>
     </ul>
      </div>
      )}

     </div>
    </nav>
  )
}

export default Navbar