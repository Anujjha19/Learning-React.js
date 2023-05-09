
import React, { useEffect, useState } from 'react';
import './App.css'


const UseEffect = () => {

    const [countn, setCountn] = useState(0);
    useEffect(() => {
        document.title = ` Chats ( ${countn} )`
    });

    return (
        <>
            <div className="container">
                <h1 className="heading">{countn}</h1>
                <button className="btn" onClick={() => setCountn(countn + 1)}>Click</button>
            </div>
        </>
    )
}

export default UseEffect;

