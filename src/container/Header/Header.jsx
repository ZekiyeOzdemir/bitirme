import React from 'react';
import './Header.css';
import mobilephone from '../../assets/headermobilephone.png';
import starts from '../../assets/starts.png'
import headerline from '../../assets/headerline.png';
function Header() {
  return (
    <div className='header app__wrapper-header section__padding' id="home"> 

     <div className='header__info'>
      <h2 className='header__h2'>REKLAMLARINIZ İÇİN YAPAY ZEKA ANALİZİ</h2>
      <h1 className='header__h1'>Kaydet,  <img src={headerline} alt='line' className='header__info-headerline' /> yükle iyi bir reklam için analiz et

      </h1>

      <p className='header__p poppins_p'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
      <button className='header__button'>Hemen Dene</button>
     </div>

     <div className='header__img'>
      <img src={mobilephone} alt='mobphone' />
     </div>

     <img className='header__starts' src={starts} alt='starts' />
    </div>
  )
}

export default Header