import React from 'react';
import './ProfileCard.css';
import ProfileCardUser from '../../assets/ProfileCardUser.png';
import { jwtDecode } from 'jwt-decode';
import Profile from '../../pages/Profile/Profile';
import  axios  from 'axios';

function ProfileCard() {
  const[editMode, setEditMode] = React.useState(false);
  const[updatedUsername, setUpdatedUsername] = React.useState('');
  
  
  const[editModeEmail, setEditModeEmail] = React.useState(false);
  const[updatedEmail, setUpdatedEmail] = React.useState('');

  const handleEditMode = () => {
    setEditMode(true);
  }

  const handleEditModeEmail = () => {
    setEditModeEmail(true);
  }

  let userToken = localStorage.getItem('token');
  var username = '';
  var userEmail = '';
  var userId = '';
  var user;
  if(userToken) {
   user = jwtDecode(userToken);
  //  console.log(user);
   username = user.sub;
   userEmail = user.email;
   userId = user.id;
  }

  const handleSave = () => {
    const url = `http://localhost:8080/api/user/${userId}`;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
      }
    };

    const payload = {
      userId: userId,
      newUserName: updatedUsername
    };

    axios.put(url, payload, config)
         .then(response => {
          console.log("Kullanıcı adı güncellendi: ", response.data);
          localStorage.clear();
          localStorage.setItem('token', response?.data?.token);
          userToken = localStorage.getItem('token');
          user = jwtDecode(userToken);
          console.log("new user: ", user);
          username = user.sub;
          userEmail = user.email;
          userId = user.id;
  
          setEditMode(false);
         })
         .catch(error => {
          console.log("Bir hata oluştu: ", error);
         });      
  }

  const handleEmailSave = () => {
    console.log(userId);
    const url = `http://localhost:8080/api/user/email/${userId}`;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
      }
    };

    const payload = {
      userId: userId,
      newEmail: updatedEmail
    };

    axios.put(url, payload, config)
         .then(response => {
          console.log("Email güncellendi: ", response.data);
          localStorage.clear();
          localStorage.setItem('token', response?.data?.token);
          
          userToken = localStorage.getItem('token');
          user = jwtDecode(userToken);
          username = user.sub;
          userEmail = user.email;
          userId = user.id;
  
          setEditModeEmail(false);
         })
         .catch(error => {
          console.log("Bir hata oluştu: ", error);
         });      
  }
    
  return (
    <Profile>
    <div className='profilecard'>
        <div className='profilecard__header'>
            <img src={ProfileCardUser} alt='user' className='profilecard__header-img' />
            <h2 className='profilecard__header-username'>{username}</h2>
        </div>

        <div className='profilecard__info'>
            <div className='profilecard__info-container'>
            <label htmlFor="username" className='container__label'>Kullanıcı Adı</label>
            <div className='profilecard__info-container__element'>
              {
                editMode ? (
                  <>
                    <input type="text" id="username" className='container__input' onChange={(e) => setUpdatedUsername(e.target.value)} />
                    <button className='container__button' onClick={handleSave}>Save</button>
                  </>
                ) : (
                <>
                  <span id='username' className='container__span'>{username}</span>
                  <button className='container__button' onClick={handleEditMode}>Edit</button>
                 </>
                )}
            </div>
            </div>
            
            <div className='profilecard__info-container'>
            <label htmlFor="email" className='container__label'>Email</label>
            <div className='profilecard__info-container__element'>
            {
              editModeEmail ? (
                <>
                    <input type="text" id="email" className='container__input' onChange={(e) => setUpdatedEmail(e.target.value)} />
                    <button className='container__button' onClick={handleEmailSave} >Save</button>
                </>
              ): (
              <>
                    <span id='email' className='container__span'>{userEmail}</span>
                    <button className='container__button' onClick={handleEditModeEmail} >Edit</button>
              </>
              )
            }
            </div>
            </div>

            <div className='profilecard__info-container'>
            <label htmlFor="role" className='container__label'>Role</label>
            <div className='profilecard__info-container__element'>
            <span id='role' className='container__span'>User</span>
            <button className='container__button' onClick={()=>{alert("Yetkiniz Yok!")}}>Edit</button>
            </div>
            </div>
        </div>

    </div>
    </Profile>
  )
}

export default ProfileCard