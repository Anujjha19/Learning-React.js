/* Uncontrolled Components

In an uncontrolled component, the value of an input element is managed by the DOM itself. This means that you don't have to write any event handlers or update the state of your component when the user types something in. Instead, you can use a ref to get the value of the input directly from the DOM.

Here's an example of an uncontrolled component:
*/
import React, { useRef } from 'react';

function UncontrolledInput() {
    const inputRef = useRef(null);

    function handleSubmit(event) {
        alert('You typed: ' + inputRef.current.value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Type something:
                <input type="text" ref={inputRef} />
            </label>
            <button>Submit</button>
        </form>
    );
}

export default UncontrolledInput;

/* In this example, we create a reference to the input element using useRef(). When the user submits the form, we use that reference to get the value of the input directly from the DOM. This approach is useful when you have a simple form or don't need to manage input values in your component's state. However, it's less flexible than controlled components and can lead to unexpected behavior in more complex forms.

  */