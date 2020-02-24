import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// import useScrollTrigger from '@material-ui/core/useScrollTrigger';

// Components
import Calendar from 'screens/facilitator/calendar';
import Cover from 'screens/facilitator/cover';

const useStyles = makeStyles({
  itemRoot: {
    width: '100%',
    // backgroundColor: theme.palette.background,
  },
});

const Facilitator = () => {
  // const theme = useTheme();
  const { itemRoot } = useStyles();
  // const trigger = useScrollTrigger({ threshold: 0 });

  return (
    <Grid
      container
      direction="column"
    >
      <Grid item classes={{ root: itemRoot }}>
        <Cover />
      </Grid>
      <Grid item classes={{ root: itemRoot }}>
        <Calendar />
      </Grid>
    </Grid>
  );
};

export default Facilitator;
