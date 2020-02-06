import React from 'react';
import Slider from 'react-slick';

// Styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({
  className,
  slides,
  slideComponent: Slide,
}) => (
  <div className={className}>
    <Slider
      arrows
      autoplay
      autoplaySpeed={4000}
      infinite
      slidesToShow={2}
      slidesToScroll={1}
      speed={2000}
    >
      {slides.map(s => (
        <Slide key={s.id} {...s} />
      ))}
    </Slider>
  </div>
);

export default Carousel;
