import React, { useState } from 'react';

const App = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    return (
        <>
            <div className="container">
                <h1 className="heading">{count}</h1>
                <button onClick={handleIncrement} className="btn">
                    Click Me
                </button>
            </div>
        </>
    )
}

export default App;