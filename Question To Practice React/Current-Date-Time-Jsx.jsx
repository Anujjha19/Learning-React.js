//   Display Current Date and Time in JSX in React JS. Use two buttons for the date and time. While clicking it
//   displays the data and time.

import { useState } from "react";

const DateTime = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDateClick = () => {
    const currentDate = new Date().toLocaleDateString();
    setDate(currentDate);
  };

  const handleTimeClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  };

  return (
    <div>
      <h2>Date and Time</h2>
      <div>
        <button onClick={handleDateClick}>Get Date</button>
        {date && <p>{date}</p>}
      </div>
      <div>
        <button onClick={handleTimeClick}>Get Time</button>
        {time && <p>{time}</p>}
      </div>
    </div>
  );
};

export default DateTime;
