import React, { useState } from 'react';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
  } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import './datePicker.css';


function Picker() {

    const [selectedDate, setSelectedDate] = useState(new Date());
  
    const handleDateChange = (time) => {
      console.log(time);
      setSelectedDate(time);
    };
  
    return (
      <div className="datePicker">
  
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
  
          <KeyboardTimePicker
           id="time-picker"
           value={selectedDate}
           InputProps={{
            disableUnderline:false,
           }}
           onChange={handleDateChange}
          />
          
          
        </MuiPickersUtilsProvider>
  
      </div>
    );
  }
  
  export default Picker;