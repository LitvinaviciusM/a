import React from 'react';

// Material UI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
// import CardActions from '@material-ui/core/CardActions';
// import IconButton from '@material-ui/core/IconButton';
// import Favorite from '@material-ui/icons/Favorite';

const GalleryCard = ({
  cardActionAreaStyles,
  cardActionsStyles,
  cardMediaStyles,
  cardStyles,
  url,
}) => (
  <Card classes={cardStyles}>
    <CardActionArea classes={cardActionAreaStyles}>
      <CardMedia
        image={url}
        classes={cardMediaStyles}
      />
    </CardActionArea>
    {/* <CardActions classes={cardActionsStyles}>
      <IconButton>
        <Favorite />
      </IconButton>
    </CardActions> */}
  </Card>
);

export default GalleryCard;
