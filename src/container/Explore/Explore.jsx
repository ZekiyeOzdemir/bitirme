import React from 'react';
import './Explore.css';
import topvector from '../../assets/exploretopvector.png';
import bottomvector from '../../assets/explorebottomvector.png';
import Slider from '../../components/Slider/Slider';
import headerline from '../../assets/headerline.png';


function Explore() {
  return (
    <div className='explore section__padding-explore explore__wrapper'>
        <img src={topvector} alt='vector' className='explore__topvector' />
        <img src={bottomvector} alt='vector' className='explore__bottomvector' />
        <div className='explore__info'>
        <h2 className='explore__header-h2'>REKLAMLARINIZ İÇİN YAPAY ZEKA ANALİZİ</h2>
        <h2 className='explore__h2'>İyi Bir Reklam Analizle Başlar</h2>
        {/* <img src={headerline} alt='line' className='explore__info-headerline' /> */}
        <p className='explore__p'>Reklam, bir markanın veya ürünün farkındalığını artırabilir ancak gerçekten etkili bir pazarlama stratejisi, müşterilerle bağlantı kurmayı ve onların güvenini kazanmayı içerir.</p>
        </div>

        <div className='explore__cards'>
         <div className="explore__cards-overlay"></div>
       <Slider />
        </div>

    </div>
  )
}

export default Explore