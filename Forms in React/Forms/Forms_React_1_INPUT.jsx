
import React, { useState } from "react";
import '../App.css'

const Forms = () => {

    const [val, setChangeValue] = useState("");
    const [completeValue, setCompleteValue] = useState();

    const handleInputVal = (event) => {
        // console.log( ' GOT Clicked ' )
        // console.log(event.target.value);
        setChangeValue(event.target.value);
    }

    const onSubmitShow = ( ) => {
        setCompleteValue(val)
    }

 
    return (
        <>
            <div>
                <h1> Hello { completeValue } </h1>
                <input type='text'
                    placeholder="Enter Name : "
                    onChange={handleInputVal}
                    value= { val }
                />

                <button onClick={onSubmitShow} 
                >Click Me </button>

            </div>
        </>
    )
}

export default Forms;
