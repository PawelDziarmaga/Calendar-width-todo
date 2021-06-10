import React, {useState} from 'react';
import './Calendar.css'

import CalendarHeder from './CalendarHeader/CalendarHeader'
import CalendarTable from './CalendarTable/CalendarTable'


function Calendar() {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth())
  const [year, setYear] = useState(now.getFullYear())
  if(month === 12){
    setMonth(0)
  }
  if(month === -1){
    setMonth(11)
  }
      const day = now.getDate();
      
      console.log("now: " + now)
      console.log("day: " + day)
 
  const handleClick = ({target}) =>{
      if(target.className === 'nextMonth'){
          if(month === 11){
            setYear(prev => ++prev)
          }
          setMonth(prev => ++prev)
          
      }else if(target.className === 'prevMonth'){
        if(month === 0){
          setYear(prev => --prev)
        }
          setMonth(prev => --prev)
        }


    }

  return (
      <div className="Calendar">
        <CalendarHeder click={handleClick} month={month} year={year}/>
        <CalendarTable month={month} year={year}/>
      </div>
    );
  }
  
  export default Calendar;