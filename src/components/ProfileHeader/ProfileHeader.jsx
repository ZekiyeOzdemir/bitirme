import React from 'react';
import './ProfileHeader.css';
import dropdownarrow from '../../assets/dropdownarrow.png';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function ProfileHeader(props) {
    const [isActive, setIsActive] = React.useState(false);
    const navigation = useNavigate(); 



  return (
    <div className='profileheader'>
         <div className={`profileheader_selectmenu ${isActive ? 'activeProfileHeader' : ''}`}>
      <div className="profile__header-selectbtn" onClick={() => setIsActive(!isActive)}>
      <span className="profile__header-sBtntext">Hoşgeldin <span className='propsusername'>{props.username}</span></span>
        <img src={dropdownarrow} alt='arrow' />
      </div>
      <ul className="profileheader__options">
        <li className='optionn'><span className='option-text'><Link to="/">Anasayfa</Link></span></li>
        <li className='optionn'><span className='option-text' onClick={()=>{localStorage.clear(); navigation("/");}}>Çıkış Yap</span></li>
      </ul>
    </div>
    </div>
  )
}

export default ProfileHeader