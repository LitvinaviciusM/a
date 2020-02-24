import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TodayIcon from '@material-ui/icons/Today';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// Components
import { SmallIcon } from 'components/icon';
import { SmallIconButton, SmallButton } from 'components/button';

const useStyles = makeStyles({
  labelRoot: {
    // ...
  },
  mainRoot: {
    padding: '0.5rem 0',
  },
  navRoot: {
    // ...
  },
  navRootButtonGroupGrouped: {
    minWidth: '0rem',
  },
  viewRoot: {
    // ...
  },
  viewRootButtonGroupGrouped: {
    minWidth: '0rem',
  },
});

const Toolbar = ({
  label,
  onView,
  views,
}) => {
  const {
    labelRoot,
    mainRoot,
    navRoot,
    navRootButtonGroupGrouped,
    viewRoot,
    viewRootButtonGroupGrouped,
  } = useStyles();

  return (
    <Grid container classes={{ root: mainRoot }} direction="row">
      <Grid container item xs={6} classes={{ root: labelRoot }}>
        <Typography
          color="primary"
          variant="h6"
        >
          {label}
        </Typography>
      </Grid>
      <Grid container item xs classes={{ root: navRoot }}>
        <ButtonGroup
          aria-label="primary"
          color="primary"
          classes={{ grouped: navRootButtonGroupGrouped }}
        >
          <SmallIconButton>
            <SmallIcon icon={<ArrowBackIcon />} />
          </SmallIconButton>
          <SmallIconButton color="secondary">
            <SmallIcon icon={<TodayIcon />} />
          </SmallIconButton>
          <SmallIconButton>
            <SmallIcon icon={<ArrowForwardIcon />} />
          </SmallIconButton>
        </ButtonGroup>
      </Grid>
      <Grid container item xs classes={{ root: viewRoot }}>
        <ButtonGroup
          aria-label="text primary button group"
          classes={{ grouped: viewRootButtonGroupGrouped }}
          color="primary"
          variant="text"
        >
          {views.map(v => (
            <SmallButton
              onClick={() => onView(v)}
              key={v}
            >
              {v}
            </SmallButton>
          ))}
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
export default Toolbar;
