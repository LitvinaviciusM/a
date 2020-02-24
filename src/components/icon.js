import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

export const SmallIcon = ({ icon: Icon }) => {
  const useStyles = makeStyles({
    iconRoot: {
      height: '1.3rem',
      width: '1.3rem',
    }
  });
  const { iconRoot } = useStyles();

  return React.cloneElement(Icon, { classes: { root: iconRoot } });
}
