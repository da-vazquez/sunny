import React, { useState } from 'react';
import './calendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarContainer() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calendar-container">
      <Calendar
        style={{width: "1000px"}}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}


export default CalendarContainer;