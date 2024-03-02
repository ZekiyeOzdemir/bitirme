import React from 'react';
import './Profile.css';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import { jwtDecode } from 'jwt-decode';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Logs from '../../components/Logs/Logs';


function Profile({children}) {
    const userToken = localStorage.getItem('token');
    var userName = '';
    var userProp;
    if(userToken) {
     const user = jwtDecode(userToken);
     userProp = user;
     userName = user.sub;
     const userId = user.userId;
     const userEmail = user.email;
    }
  return (
    <div className='profile'>
        <ProfileHeader username={userName}/>
        <Sidebar />
        <div className='profile__header'>
            <span className='profile__header-span'>My Profile</span>
        </div>
        {/* <ProfileCard user={userProp} /> */}
        {/* <ProfileCard /> */}
        {/* <Logs /> */}
        {children}
    </div>
  )
}

export default Profile