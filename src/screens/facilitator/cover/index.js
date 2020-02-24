import React, { useContext, useEffect, useState } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CategoryIcon from '@material-ui/icons/Category';
import { Rating } from '@material-ui/lab';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

// Components
import Carousel from 'components/carousel';
import GalleryCard from 'components/gallerycard';
import { SmallIconButton } from 'components/button';
import { SmallIcon } from 'components/icon';

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
  avatarRoot: {
    height: '7rem',
    marginRight: '1rem',
    width: '7rem',
  },
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
  descriptionTypographyRoot: {
    paddingTop: '0.5rem',
  },
  facilitiesButtonRoot: {
    marginTop: '1rem',
  },
  mainRoot: {
    padding: '0.5rem',
  },
  ratingTypographyRoot: {
    // ...
  },
  titleTypographyRoot: {
    paddingTop: '0.5rem',
  },
});

const Cover = () => {
  const { apiGetGallery } = useContext(ApiContext);
  const [slides, setSlides] = useState([]);
  const {
    // avatarAndRatingRoot,
    avatarRoot,
    cardActionAreaRoot,
    cardActionsRoot,
    cardMediaRoot,
    cardRoot,
    descriptionTypographyRoot,
    facilitiesButtonRoot,
    mainRoot,
    ratingTypographyRoot,
    titleTypographyRoot,
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
      <Grid container direction="column" classes={{ root: mainRoot }}>

        {/* Header */}
        <Grid container item direction="column">

          <Grid container item xs direction="row">
            <Grid item>
              <Avatar
                alt="profile-pic"
                classes={{ root: avatarRoot }}
                src="http://localhost:3000/gallery/4.jpg"
              />
            </Grid>
            <Grid container item xs direction="column" alignItems="flex-start" justify="center">
              <Grid item>
                <Rating 
                  defaultValue={2.5}
                  precision={0.5}
                  size="large"
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="caption"
                  color="primary"
                  classes={{ root: ratingTypographyRoot }}
                >
                  127 Reviews!
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="caption"
                  color="primary"
                  classes={{ root: ratingTypographyRoot }}
                >
                  Level - Pro
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Typography
              variant="h4"
              color="primary"
              classes={{ root: titleTypographyRoot }}
            >
              Average Length Name
            </Typography>
          </Grid>
        </Grid>

        {/* Description */}
        <Grid item>
          <Typography
            variant="subtitle2"
            color="primary"
            classes={{ root: descriptionTypographyRoot }}
          >
            Descript ion Descripti on Des cription Description Descr iption Descr iption De scription Description Descrip tion Description Description Description
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            startIcon={<SmallIcon icon={<CategoryIcon />} />}
            classes={{ root: facilitiesButtonRoot }}
          >
            Facilities
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cover;
