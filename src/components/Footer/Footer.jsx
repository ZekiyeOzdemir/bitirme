import React from 'react';
import './Footer.css';
import facebook from '../../assets/footerfacebook.png';
import instagram from '../../assets/footerinstagram.png';
import twitter from '../../assets/footertwitter.png';

function Footer() {
  return (
    <div className='footer section__padding footer__wrapper app__bg'>
        <div className="footer__content">

         <div className="footer__content-logo">
            <h3 className='footer__content-h3'>ReklamAi.</h3>
            <span>Reklamlarınızı hemen test edin, kalıcı bir analiz yapın.</span>
         </div>

         <div className="footer__content-info">
            <div className="info__links">
                <h2>Company</h2>
                <a href=''>About</a>
                <a href=''>Careers</a>
                <a href=''>Mobile</a>
            </div>
            <div className="info__links">
                <h2>Contact</h2>
                <a href=''>About</a>
                <a href=''>Careers</a>
                <a href=''>Mobile</a>
            </div>
            <div className="info__links">
                <h2>More</h2>
                <a href=''>About</a>
                <a href=''>Careers</a>
                <a href=''>Mobile</a>
            </div>
         </div>

         <div className="footer__content-socials">
            <a href=''><img src={facebook} alt='social logo' className='socials-img'/></a>
            <a href=''><img src={instagram} alt='social logo' className='socials-img'/></a>
            <a href=''><img src={twitter} alt='social logo' className='socials-img'/></a>            
         </div>
        </div>

        <span className="footer__creator">All rights reserved@adai.co</span>
    </div>
  )
}

export default Footer