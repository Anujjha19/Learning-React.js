
/* Create na appp that meeasure elapsed time( a stopwaatch) . You have to use state mangement and evnt handling to achieve the same . Also customize it with addtional deatures like lap time functionality , a countdown timer , mutiple timers and CSS styling   */


import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 10);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    function handleStart() {
        setIsRunning(true);
    }

    function handleStop() {
        setIsRunning(false);
    }

    function handleReset() {
        setTime(0);
        setLaps([]);
        setIsRunning(false);
    }

    function handleLap() {
        setLaps(prevLaps => [...prevLaps, time]);
    }

    function formatTime(time) {
        const date = new Date(time);
        const hours = date.getUTCHours().toString().padStart(2, '0');
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        const seconds = date.getUTCSeconds().toString().padStart(2, '0');
        const milliseconds = date.getUTCMilliseconds().toString().padStart(3, '0');
        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }


    return (
        <div className="stopwatch">
            <h1>Stopwatch</h1>
            <div className="timer">{formatTime(time)}</div>
            <div className="buttons">
                {!isRunning && <button onClick={handleStart}>Start</button>}
                {isRunning && <button onClick={handleStop}>Stop</button>}
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleLap}>Lap</button>
            </div>
            <div className="laps">
                {laps.map((lap, index) => (
                    <div key={index} className="lap">
                        Lap {index + 1}: {formatTime(lap)}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Stopwatch;


