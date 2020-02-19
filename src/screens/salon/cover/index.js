import React, { useContext, useEffect, useState } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';

// Components
import Carousel from 'components/carousel';
import GalleryCard from 'components/gallerycard';

// Contexts
import { ApiContext } from 'contexts/api';

// Styling
import './index.scss';

const carouselSettings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1500,
};

const useStyles = makeStyles({
  // cardActionAreaRoot: {
  //   paddingLeft: '5px',
  // },
  cardActionsRoot: {
    position: 'absolute',
    left: '0',
    bottom: '0',
  },
  cardMediaRoot: {
    height: '300px',
  },
  cardRoot: {
    boxShadow: 'none',
    position: 'relative',
  },
});

const Cover = () => {
  const { apiGetGallery } = useContext(ApiContext);
  const [slides, setSlides] = useState([]);
  const {
    cardActionAreaRoot,
    cardActionsRoot,
    cardMediaRoot,
    cardRoot,
  } = useStyles();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const { status, body } = await apiGetGallery();

    if (status === 200) setSlides(body);
  }

  return (
    <div className="cover">
      <Carousel
        className="cover__slider"
        settings={carouselSettings}
        slides={slides}
        slideComponent={GalleryCard}
        slideComponentProps={{
          cardActionAreaStyles: { root: cardActionAreaRoot },
          cardActionsStyles: { root: cardActionsRoot },
          cardMediaStyles: { root: cardMediaRoot },
          cardStyles: { root: cardRoot }
        }}
      />
      {/* <Typography
        gutterBottom
        variant="h2"
      >
        Very very very very very long name
      </Typography>
      <IconButton>
        <FacebookIcon />
      </IconButton>
      <IconButton>
        <InstagramIcon />
      </IconButton> */}
    </div>
  );
};

export default Cover;
