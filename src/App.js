import React, { useState } from 'react';
import useDate from './custom-hooks/useDate.js';
import './style.css';

export default function App() {
  const [day, setDay] = useState()
  const [month, setMonth] = useState()
  const { date, getDay, getMonth, addDay, addMonth } = useDate();

  return (
    <div>
      <br />
      Date: {date.toString()}
      <br />
      Day: {getDay()} {" "}
      <br />
      Month: {getMonth()}
      {" "}
      <div>
        <label htmlFor='day'> Add Day </label>
        <input type='number' id='day'
        onChange={(e) => setDay(e.target.value)}/>
        <br/>
        <label htmlFor='month'> Add Month </label>
        <input type='number' id='month'
        onChange={(e) => setMonth(e.target.value)}/>
        <p>
         {day && addDay(day).toString()}
         <br />
          {month && addMonth(month).toString()}
        </p>
      </div>
    </div>
  );
}
