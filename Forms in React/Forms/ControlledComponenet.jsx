
/* 
In React, there are two ways to handle form inputs: Controlled Components and Uncontrolled Components.

Controlled Components

In a controlled component, the value of an input element is controlled by React via props. This means that whenever the user types something in, it triggers a callback function which updates the state, and that updated state is passed down to the input as a new prop. This allows you to manage the input values in the state of the parent component, making it easy to validate the input values, perform calculations, and more.

Here's an example of a controlled component: */
import React, { useState } from 'react';

function ControlledInput() {
    const [inputValue, setInputValue] = useState('');

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            <p>Typed: {inputValue}</p>
        </div>
    );
}
export default ControlledInput;

/* In this example, when the user types into the input, the handleChange() function updates the state of inputValue to match the user's input. The input's value is set to inputValue, so every time the state updates, the input re-renders with the updated value.

 */