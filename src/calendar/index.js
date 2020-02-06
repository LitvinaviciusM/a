import React from 'react';
import { Calendar as ReactBigCalendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

// Components
import Event from 'calendar/event';

// Styling
import './index.scss';

const localizer = momentLocalizer(moment)

const Calendar = () => (
  <ReactBigCalendar
    localizer={localizer}
    events={[]}
    components={{
      event: Event,
    }}
  />
);

export default Calendar;
