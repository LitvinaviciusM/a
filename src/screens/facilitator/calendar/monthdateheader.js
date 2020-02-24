import React from 'react';
import moment from 'moment'

// Material UI
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const MonthDateHeader = ({
  date,
  label,
  onDrillDown,
}) => {
  const isToday = moment(date).isSame(moment(), 'day');
  const isPast = moment(date).isBefore(moment(), 'day');

  return (
    <IconButton
      color="primary"
      disabled={isPast}
      onClick={onDrillDown}
      size="small"
    >
      <Typography color={isToday ? 'secondary' : 'primary'}>
        {label}
      </Typography>
    </IconButton>
  );
};

export default MonthDateHeader;
