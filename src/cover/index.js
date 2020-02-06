import React, { useContext, useEffect, useState } from 'react';

// Components
import Carousel from 'carousel';
import GallerySlide from 'components/galleryslide';

// Contexts
import { ApiContext } from 'context/api';

// Styling
import './index.scss';

const Cover = () => {
  const { apiGetGallery } = useContext(ApiContext);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const { status, body } = await apiGetGallery();

    if (status === 200) setSlides(body);
  }

  return (
    <div className="cover">
      <div className="cover__title">
        Gerai kerpu
      </div>
      <Carousel
        className="cover__slider"
        slides={slides}
        slideComponent={GallerySlide}
      />
    </div>
  );
};

export default Cover;
