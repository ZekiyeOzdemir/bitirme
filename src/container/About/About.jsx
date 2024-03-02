import React from 'react'
import aboutpointer from '../../assets/aboutpointer.png';
import './About.css';
import starts from '../../assets/starts.png';

function About() {
  return (
    <div className='about app__bg section__padding' id='about'>

        <div className='about__header'>
         <h2 className='about__h2'>Reklamlarınızı Hızlıca Test Edin</h2>
         <p className='about_p poppins_p'>Yapay zeka teknolojisi ile hazırlanmış servisimizde reklamlarınızın kalitesini hızlıca test edebilir ve sonuçları anında öğrenebilirsiniz</p>
         <p className='about_p poppins_p'>Hemen başlamak için adımlarımızı doğru bir şekilde takip et ve reklam sonuçların için kendini hazırla!</p>
        </div>

        <div className='about__content'>
            <div className='about__content-img'>
            <div className="about__content-imgoverlay"></div>
            <img src={aboutpointer} alt='aboutpointer' />
            </div>
            
            <div className="about__content-info">
            <div className="info__container">
                        <div className='info__container-group'>
                         <p>1</p>
                        </div>
                    <div className="info__container-headers">
                        <h3>Reklam Metnini Yaz</h3>
                        <p className='poppins_p'>With lots of unique blocks, you can easily build a page without coding. </p>
                    </div>
                </div>
            <div className="info__container">
                        <div className='info__container-group'>
                         <p>2</p>
                        </div>
                    <div className="info__container-headers">
                        <h3>Reklamı Seslendir ve Kaydet</h3>
                        <p className='poppins_p'>With lots of unique blocks, you can easily build a page without coding. </p>
                    </div>
                </div>
            <div className="info__container">
                        <div className='info__container-group'>
                         <p>3</p>
                        </div>
                    <div className="info__container-headers">
                        <h3>Siteye Yükle ve Sonuçları Öğren</h3>
                        <p className='poppins_p'>With lots of unique blocks, you can easily build a page without coding. </p>
                    </div>
                </div>
            </div>
        </div>
        <img className='about__starts' src={starts} alt='starts' />
    </div>
  )
}

export default About

// div className="info__container">
//                         <div className='info__container-groupcontainer'>
//                         <div className='info__container-group'>
//                          <p>1</p>
//                         </div>
//                         </div>
//                     <div className="info__container-headers">
//                         <h3>Reklam Metnini Yaz</h3>
//                         <p className='poppins_p'>With lots of unique blocks, you can easily build a page without coding. </p>
//                     </div>
//                 </div>