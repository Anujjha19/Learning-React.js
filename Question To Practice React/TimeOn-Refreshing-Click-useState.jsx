//How to get Time on Refreshing and Clicking Button using useState Hook.

import React, { useState } from 'react';

const Task5 = () => {

    let nowTime = new Date().toLocaleTimeString();

    const [currTime, setCurrTime] = useState(nowTime)
    const UpdateTime = () => {
        nowTime = new Date().toLocaleTimeString();
        setCurrTime(nowTime);
    }

    return (
        <>
            <div style={
                {
                    textAlign: "center",
                }
            }
            >
                <h1> {currTime} </h1>
                <button
                    onClick={UpdateTime}
                    style={
                        {
                            
                            fontSize: "1.5rem",
                            backgroundColor: "red",
                            color: "white",
                            borderRadius: "15px",
                            cursor: "pointer"
                        }
                    }>
                    Click Me
                </button>
                <p style={{ fontSize: "1.2rem" }}> Refresh or Click to get Current Time </p>
            </div>
        </>
    )
}

export default Task5;
