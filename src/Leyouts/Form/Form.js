import React, { useState } from 'react'
import './Form.css'
let id = 0;

function Form() {
  const [quest, setQuest] = useState('')
  const [timeStart, setTimeStart] = useState('')
  const [timeDone, setTimeDone] = useState('')
  const [date, setDate] = useState('')

  const onChangeHandler = (e) => {
    switch(e.target.id){
      case 'quest':
        return setQuest(e.target.value);
      case 'timeStart':
        return setTimeStart(e.target.value);
      case 'timeDone':
        return setTimeDone(e.target.value);
      case 'date':
        return setDate(e.target.value);
      default:
        return
    }
    
  }
  const buttonHandler = (e) => {
    e.preventDefault()

    if(!quest.length){
      return;
    }


    const object ={
      id,
      quest,
      date,
      timeStart,
      timeDone,
    }
    console.log(object)
    id = id + 1;
  }
    return (
      <div className="form">
          <form>
            <div>
              <label>
                Nazwa zadania:
                <input 
                  id="quest"
                  onChange={onChangeHandler}
                  type="text"
                  value={quest}
                  />
              </label>
            </div>
            <div>
              <label>
                Od godziny:
                <input 
                  id="timeStart"
                  onChange={onChangeHandler}
                  type="time"
                  value={timeStart}
                  />
              </label>
              <label>
                Do godziny:
                <input 
                  id="timeDone"
                  onChange={onChangeHandler}
                  type="time"
                  value={timeDone}
                  />
              </label>
            </div>
            <div>
              <label>
                Data:
                <input 
                  id="date"
                  onChange={onChangeHandler}
                  type="date"
                  value={date}
                  />
              </label>
            </div>
            <button onClick={buttonHandler}>Dodaj zadanie</button>
          </form>
      </div>
    );
  }
  
  export default Form;