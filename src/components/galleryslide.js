import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
  cardMediaRoot: {
    height: '200px',
    padding: '10px',
  },
});

const GallerySlide = ({ url }) => {
  const styles = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia image={url} classes={{ root: styles.cardMediaRoot }} />
      </CardActionArea>
      <CardActions>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default GallerySlide;
