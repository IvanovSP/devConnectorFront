import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default ({ date, handleChange }) => (
  <DatePicker
    selected={date}
    onChange={handleChange}
  />
);
