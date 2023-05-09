//Demonstrate the use of useEffect and useMemo hook through your code.

import { useState, useEffect, useMemo } from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    // useEffect hook to update document title
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    // useMemo hook to calculate the length of the text string
    const textLength = useMemo(() => {
        console.log('Calculating text length...');
        return text.length;
    }, [text]);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <br />
            <input type="text" value={text} onChange={handleTextChange} />
            <p>Text Length: {textLength}</p>
        </div>
    );
};

export default MyComponent;

/* import React, { useState } from 'react';

function USEMEMO() {
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(0);

    return (
        <>
            <div className="container">
                <h1 className="heading"> Learning USE MEMO </h1>
                <button className="btn" onClick={() => setAdd(add + 1)}>Addition</button>
                <span>{add}</span>
                <button className="btn" onClick={() => setMinus(minus - 1)}>Subtraction</button>
                <span>{minus}</span>
            </div>
        </>
    )

}

export default USEMEMO; */