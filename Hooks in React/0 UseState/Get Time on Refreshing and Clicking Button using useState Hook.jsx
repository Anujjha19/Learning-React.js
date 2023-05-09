
import React, { useState } from 'react';
import './App.css'



const App = () => {

    let nowTime = new Date().toLocaleTimeString();

    const [currTime, setCurrTime] = useState(nowTime)
    const UpdateTime = () => {
        nowTime = new Date().toLocaleTimeString();
        setCurrTime(nowTime);
    }

    return (
        <>
            <div className="container">
                <h1 className="heading"> {currTime} </h1>
                <button
                    onClick={UpdateTime}
                    className="btn">
                    Click Me
                </button>
                <p className="o"> Refresh or Click to get Current Time </p>
            </div>
        </>
    )
}

export default App;