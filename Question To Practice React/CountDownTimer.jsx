// Display the countdown timer

import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(60); // Set initial time left to 60 seconds

  useEffect(() => {
    if (timeLeft === 0) return; // Stop the timer if timeLeft is 0

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1); // Decrement time left by 1 second
    }, 1000);

    return () => clearInterval(intervalId); // Clear the interval when component unmounts
  }, [timeLeft]);

  const formatTimeLeft = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Add leading zero to single-digit seconds
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${formattedSeconds}`;
  };

  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>{formatTimeLeft()}</p>
    </div>
  );
};

export default CountdownTimer;
