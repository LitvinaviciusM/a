import React from 'react';

// Material UI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blueGrey700 } from 'material-ui/styles/colors';
import { red900 } from 'material-ui/styles/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey700, // #455a64
    },
    secondary: {
      main: red900, // #b71c1c
    },
  },
});

const MuiProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default MuiProvider;
