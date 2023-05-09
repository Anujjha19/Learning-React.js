
import React, { useState } from 'react';


const HooksIntro = () => {

    const [value, setToggle] = useState('Apple');
    const [count, setCount] = useState(0);

    const Toggle = () => {
        // setCount(1)
        // setToggle('New Apple')
        let Nvalue= value
        if (Nvalue === 'Apple') {
            setToggle('Apple is Good ');
            setCount(1)
        }
        else {
            setToggle('Apple');
            setCount(0)
        }
    }

return (
    <>
        <div className="container">
            <h1 className="heading">{value} , {count} </h1>
            <button
                onClick={Toggle}
                className="btn">
                Click Me
            </button>
        </div>
    </>
)
}

export default HooksIntro;

