import React from 'react';
import Slider from 'react-slick';

// Styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = React.forwardRef(({
  className,
  settings,
  slides,
  slideComponent: Slide,
  slideComponentProps,
}, ref) => (
  <div className={className} ref={ref}>
    <Slider {...settings}>
      {slides.map(s => (
        <Slide
          key={s.id}
          {...s}
          {...slideComponentProps}
        />
      ))}
    </Slider>
  </div>
));

export default Carousel;
