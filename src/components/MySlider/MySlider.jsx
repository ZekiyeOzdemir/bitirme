// import React, { useState } from 'react';
// import './MySlider.css';
// import jadoo from '../../assets/aboutpointer.png';
// import phone from '../../assets/headermobilephone.png'

// function MySlider() {
//     const [slideIndex, setSlideIndex] = useState(1);

//     const plusSlides = (n) => {
//         showSlides(slideIndex + n);
//     };

//     const currentSlide = (n) => {
//         showSlides(n);
//     };
//     const showSlides = (n) => {
//         let newIndex = n;
//         const slides = document.getElementsByClassName("mySlides");
//         const dots = document.getElementsByClassName("dot");
//         if (n > slides.length) {
//             newIndex = 1;
//         }
//         if (n < 1) {
//             newIndex = slides.length;
//         }
//         for (let i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         for (let i = 0; i < dots.length; i++) {
//             dots[i].className = dots[i].className.replace(" active", "");
//         }
//         slides[newIndex - 1].style.display = "block";
//         dots[newIndex - 1].className += " active";
//         setSlideIndex(newIndex);
//     };
//   return (
//     <>
//     <div className='slideshow-container'>
//         <div className="mySlides fade mySlides-1">
//             <div className='numbertext'>1/3</div>
//             <img src={jadoo} style={{width: '100%'}}/>
//             <div className='text'>Caption text</div>
//         </div>
//         <div className="mySlides fade mySlides-2">
//             <div className='numbertext'>2/3</div>
//             <img src={jadoo} style={{width: '100%'}}/>
//             <div className='text'>Caption text</div>
//         </div>

//         <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
//         <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
//     </div>

//     <div className='dot__container'>
//     <span className="dot" onClick={() => currentSlide(1)}></span>
//     <span className="dot" onClick={() => currentSlide(2)}></span>
//     </div>

//     </>
//   )
// }

// export default MySlider