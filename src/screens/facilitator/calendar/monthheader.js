import React from 'react';

// Material UI
import Typography from '@material-ui/core/Typography';

const MonthHeader = ({ label }) => (
  <Typography
    color="primary"
    gutterBottom
    variant="subtitle2"
  >
    {label}
  </Typography>
);

export default MonthHeader;
