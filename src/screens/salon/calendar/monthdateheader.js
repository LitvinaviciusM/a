import React from 'react';
import moment from 'moment'

// Material UI
import IconButton from '@material-ui/core/IconButton';
import FlagIcon from '@material-ui/icons/Flag';

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
      {isToday ? (
        <FlagIcon color="secondary" />
      ) : label}
    </IconButton>
  );
};

export default MonthDateHeader;
