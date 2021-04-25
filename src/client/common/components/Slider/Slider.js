import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';
import SlideButton from './SlideButton';
import Slide from './Slide';

const Slider = ({ children, prevIcon, nextIcon, keyIndex }) => {
  const [currentSlide, setSlide] = useState(0);
  const nextSlide = (currentSlide < children.length - 1) ? currentSlide + 1 : currentSlide;
  const prevSlide = (currentSlide <= 1) ? 0 : currentSlide - 1;

  return (
    <S.Slider>
      <SlideButton
        data-testid="slide-back"
        onClick={() => {
          setSlide(prevSlide);
        }}
      >
        <S.SlideButtonIndicator data-testid="prev-indicator">
          {prevIcon || '<'}
        </S.SlideButtonIndicator>
      </SlideButton>
      <S.Carousel
        data-testid="slider-carousel"
        slides={children.length}
        slide={currentSlide}
      >
        {children.map((child, slideNumber) => (
          <Slide
            key={`${keyIndex}_sl_${slideNumber}`}
            slideNumber={slideNumber}
            slide={currentSlide}
          >
            {child}
          </Slide>
        ))}
      </S.Carousel>
      <SlideButton
        data-testid="slide-next"
        onClick={() => {
          setSlide(nextSlide);
        }}
      >
        <S.SlideButtonIndicator data-testid="next-indicator">
          {nextIcon || '>'}
        </S.SlideButtonIndicator>
      </SlideButton>
    </S.Slider>
  );
};

Slider.defaultProps = {
  prevIcon: null,
  nextIcon: null,
  keyIndex: '',
};

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  prevIcon: PropTypes.node,
  nextIcon: PropTypes.node,
  keyIndex: PropTypes.string,
};

export default Slider;
