//Create a Digital Clock using React JS


import React, { useState } from 'react';

const DigitalClock = () => {

    let time = new Date().toLocaleTimeString();
    const [cTime, setCTime] = useState(time);
    const DigitalClockInterval = () => {
        time = new Date().toLocaleTimeString();
        setCTime(time)
    };

    setInterval(DigitalClockInterval, 1000);


    return (
        <>
            <div className="container">
                <h3> Digital Clock </h3>
                <h1 className="heading"> {cTime} </h1>
            </div>
        </>
    )
}

export default DigitalClock;