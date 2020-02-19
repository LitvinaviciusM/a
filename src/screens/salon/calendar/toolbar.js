import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import CategoryIcon from '@material-ui/icons/Category';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FlagIcon from '@material-ui/icons/Flag';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles({
  containerRoot: {
    padding: '2.5vh 0',
  },
});

const Toolbar = ({
  label,
  onView,
  views,
}) => {
  const { containerRoot } = useStyles();

  return (
    <Container
      disableGutters
      direction="column"
      classes={{
        root: containerRoot,
      }}
    >
      <Grid container direction="column" spacing={2}>
        <Grid container item>
          <Grid item xs={7}>
            <Typography
              color="primary"
              variant="h5"
            >
              {label}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <ButtonGroup
              aria-label="text primary button group"
              color="primary"
              size="small"
              variant="text"
            >
              {views.map(v => (
                <Button
                  onClick={() => onView(v)}
                  key={v}
                >
                  {v}
                </Button>
              ))}
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item>
            <Button
              color="secondary"
              variant="outlined"
              size="small"
              startIcon={<CategoryIcon />}
            >
              Facilities
            </Button>
          </Grid>
          <Grid item xs={5}>
            <ButtonGroup
              aria-label="text primary button group"
              color="primary"
              size="small"
              variant="text"
            >
              <IconButton>
                <ArrowBackIcon color="primary" />
              </IconButton>
              <IconButton>
                <FlagIcon color="secondary" />
              </IconButton>
              <IconButton>
                <ArrowForwardIcon color="primary" />
              </IconButton>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Toolbar;
