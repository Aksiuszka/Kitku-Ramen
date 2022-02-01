import React, { useState } from 'react';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import './datePicker.css';


function Picker() {

    const [selectedDate, setSelectedDate] = useState(new Date());
  
    const handleDateChange = (date) => {
      console.log(date);
      setSelectedDate(date);
    };
  
    return (
      <div className="datePicker">
  
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
  
          <KeyboardDatePicker
            value={selectedDate}
            InputProps={{
                disableUnderline: false,
               }}
            onChange={handleDateChange}
          />
          
          
        </MuiPickersUtilsProvider>
  
      </div>
    );
  }
  
  export default Picker;