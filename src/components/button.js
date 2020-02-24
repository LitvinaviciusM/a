import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

export const SmallIconButton = ({ children, ...rest }) => {
  const useStyles = makeStyles({
    iconButtonRoot: {
      padding: '0 0.2rem',
    }
  });
  const { iconButtonRoot } = useStyles();

  return (
    <IconButton {...rest} classes={{ root: iconButtonRoot }}>
      {children}
    </IconButton>
  );
}

export const SmallButton = ({ children, ...rest }) => {
  const useStyles = makeStyles({
    buttonRoot: {
      fontSize: '0.7rem',
      padding: '0 0.3rem',
    }
  });
  const { buttonRoot } = useStyles();

  return (
    <Button {...rest} classes={{ root: buttonRoot }}>
      {children}
    </Button>
  );
}
