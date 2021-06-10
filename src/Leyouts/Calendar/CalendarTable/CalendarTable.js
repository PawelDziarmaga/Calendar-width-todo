import React, {useEffect} from 'react';
import './CalendarTable.css'

function Calendar({year, month}) {

  const days = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];

  

  
  let td = document.createElement("td");
 
  useEffect(() => {

    //find container, create table and put in to container
    const container = document.getElementById('CalendarTable')
    container.innerHTML=''

    const tab = document.createElement("table");
    container.appendChild(tab)

    //find how many days in month and which is the first day
    const daysInMonth = new Date(year, month+1, 0).getDate();
    let firtDayOfMonth = new Date(year, month, 1).getDay();

    //Correction of the order of days
    if (firtDayOfMonth === 0) {
      firtDayOfMonth = 7;
    }

    //Create headers
    let tr = document.createElement("tr");
    days.forEach(day => {
      const th = document.createElement("th");
      th.innerHTML = day;
      tr.appendChild(th);
     });

    tab.appendChild(tr)

    
    if (firtDayOfMonth-1 !== 0) {
      tr = document.createElement("tr");
      tab.appendChild(tr);
    }

     for (let i=0; i<firtDayOfMonth-1; i++) {
      td.innerHTML = "";
      tr.appendChild(td);
    }

    let j = daysInMonth + firtDayOfMonth - 1;

    for (let i = firtDayOfMonth-1; i<j; i++) {
      if(i % 7 === 0){
         tr = document.createElement("tr");
         tab.appendChild(tr);
      }
      const td = document.createElement("td");
      td.innerText = i - firtDayOfMonth + 2;
      td.dayNr = i - firtDayOfMonth + 2;
      td.classList.add("day");

      tr.appendChild(td);
    }
    
  }, [{days}])



  return (
      <div id="CalendarTable">

      </div>
    );
  }
  
  export default Calendar;