import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './Slider.css';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return ( 
    <div className="center">
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <section className='slider'>
        {slides.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (
                <img src={slide.image} alt='travel image' className='image'/>
              )}
              {index === current && (
                <div class="centered">
                  <div class="centerpara">
                    <a href={slide.linkOne}><i class="fab fa-github-square fa-10x Right whitee size"></i></a>
                    <a href={slide.linkTwo}><i class="fas fa-external-link-square-alt fa-10x Left whitee size"></i></a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
    </div>
  );
};

export default ImageSlider;
