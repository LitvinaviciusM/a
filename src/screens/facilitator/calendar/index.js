import React from 'react';
import { Calendar as ReactBigCalendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

// Components
import Toolbar from 'screens/facilitator/calendar/toolbar';
import MonthHeader from 'screens/facilitator/calendar/monthheader';
import MonthDateHeader from 'screens/facilitator/calendar/monthdateheader';

// Styling
import './index.scss';

const localizer = momentLocalizer(moment)

const Calendar = () => (
  <ReactBigCalendar
    localizer={localizer}
    events={[]}
    components={{
      toolbar: Toolbar,
      month: {
        header: MonthHeader,
        dateHeader: MonthDateHeader,
      },
    }}
    views={['month', 'day']}
  />
);

export default Calendar;
