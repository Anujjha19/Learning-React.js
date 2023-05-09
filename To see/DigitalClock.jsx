
import React, { useState } from 'react';
import './App.css'



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
            <h1 className="heading"> {cTime} </h1>
            <p className="o">Digital Clock using  =   useState Hooks </p>
        </div>
    </>
)
}

export default DigitalClock;