import React, { useEffect, useState } from 'react';

function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const day = currentDateTime.toLocaleDateString('en-US', { weekday: 'long' });
  const month = currentDateTime.toLocaleDateString('en-US', { month: 'long' });
  const date = currentDateTime.getDate();
  const year = currentDateTime.getFullYear();
  const time = currentDateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' });

  return (
    <div>
      <p>{day} {month} {date}, {year} <span style={{color: "red"}}>{time}</span> </p>
    </div>
  );
}

export default DateTimeDisplay;