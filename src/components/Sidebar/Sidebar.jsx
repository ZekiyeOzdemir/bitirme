import React from 'react';
import './Sidebar.css';
import jadoo from '../../assets/Jadoo.jpg';
import { NavLink, useNavigate } from 'react-router-dom';


function Sidebar() {
    const navigation = useNavigate();

  return (
    <div className='sidebar'>
        <div className="sidebar__logo">
            <img className='sidebar__logo-img' src={jadoo} onClick={() => {navigation('/')}}/>
        </div>
        <div className="sidebar__links">
            <div className='sidebar__links-link'>
            <span><NavLink to="/profile/user" activeclassname="active-link">Kişisel Bilgiler</NavLink></span>
            </div>
            
            <div className='sidebar__links-link'>
            <span><NavLink to="/profile/logs" activeclassname="active-link">Geçmiş Analizler</NavLink></span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar