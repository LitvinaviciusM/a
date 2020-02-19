import React from 'react';
import classNames from 'classnames';

// Material UI
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

// Components
import Calendar from 'screens/salon/calendar';
import Cover from 'screens/salon/cover';

const Salon = () => {
  const trigger = useScrollTrigger({ threshold: 0 });

  return (
    <div className={classNames('screen', { 'screen--scrolled': trigger })}>
      <Cover />
      <Calendar />
    </div>
  );
};

export default Salon;
