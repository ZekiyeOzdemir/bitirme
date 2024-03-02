import React, { useState } from 'react';
import './Slider.css'; // Stil dosyası
import exploremarkz from '../../assets/exploremarkz.jpg'
import jeffbezos from '../../assets/sliderjeffBezos.png';
import elonmusk from '../../assets/slideelonmusk.jpg';

const Slider = () => {
const [slideIndex, setSlideIndex] = useState(1);

const plusSlides = (n) => {
    showSlides(slideIndex + n);
};

const currentSlide = (n) => {
    showSlides(n);
};

const showSlides = (n) => {
    let newIndex = n;
    const slides = document.getElementsByClassName("slider__content");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        newIndex = 1;
    }
    if (n < 1) {
        newIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dotactive", "");
    }
    slides[newIndex - 1].style.display = "block";
    dots[newIndex - 1].className += " dotactive";
    setSlideIndex(newIndex);
    
};

  return (
    <div className='slider'>
      <div className='slider__content fade'>
        <div className='xxx'>

        <div className='slider__content-img'>
            <img src={exploremarkz} alt='picture' />
            <div className="slider__content-img__overlay"></div>
        </div>
        <div className='slider__content-info'>
        <h3 className='slider__content-h3'>Akılda kalıcılık</h3>
        <p className='slider__content-p'><span>“</span>Advertising works most effectively when it's in line with what people are already trying to do. And people are trying to communicate in a certain way on Facebook - they share information with their friends, they learn about what their friends are doing - so there's really a whole new opportunity for a new type of advertising model within that.”</p>
        <span className='slider__content-span'>Founder of Facebook</span>
        </div>
        </div>
      </div>

      <div className='slider__content fade'>
        <div className='xxx'>

        <div className='slider__content-img'>
            <img src={elonmusk} alt='picture' />
            <div className="slider__content-img__overlay"></div>
        </div>
        <div className='slider__content-info'>
        <h3 className='slider__content-h3'>Reklamın Kazancı</h3>
        <p className='slider__content-p'> <span>“</span> Reklam, bir markanın veya ürünün farkındalığını artırabilir ancak gerçekten etkili bir pazarlama stratejisi, müşterilerle bağlantı kurmayı ve onların güvenini kazanmayı içerir. Müşterilerinizin güvenini kazanmak ve sadakatlerini kazanmak için dürüstlük, şeffaflık ve kaliteye odaklanmalısınız.”</p>
        <span className='slider__content-span'>Founder of Tesla</span>
        </div>
        </div>
      </div>

      <div className='slider__content fade'>
        <div className='xxx'>

        <div className='slider__content-img'>
            <img src={jeffbezos} alt='picture' />
            <div className="slider__content-img__overlay"></div>
        </div>
        <div className='slider__content-info'>
        <h3 className='slider__content-h3'>Reklamın Önemi</h3>
        <p className='slider__content-p'><span>“</span>Advertising is the price you pay for having an unremarkable product or service.” This quote on Advertising from Jeff Bezos shows he didn’t believe in advertising. He changed his mind. </p>
        <span className='slider__content-span'>Founder of Amazon</span>
        </div>
        </div>
      </div>
      <div className='slider__controls'>
        <button onClick={() => plusSlides(-1)} className='prev'>&#8249;</button>
        <button onClick={() => plusSlides(1)} className='next'>&#8250;</button>
      </div>

      
    <div className='dot__container'>
    <span className="dot dotactive" onClick={() => currentSlide(1)}></span>
    <span className="dot" onClick={() => currentSlide(2)}></span>
    <span className="dot" onClick={() => currentSlide(3)}></span>
    </div>
    </div>
  );
};

export default Slider;
