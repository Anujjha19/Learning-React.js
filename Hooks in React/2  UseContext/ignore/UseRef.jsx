/* Example 1
import React, { useState, useEffect, useRef } from 'react'

const UseRefTask = () => {

    const [myData, setMyData] = useState("");
    //const [count, setCount] = useState(0);

    const count = useRef(0);


    useEffect(() => {
        //setCount(count + 1);
        count.current=count.current +1;
    }, )
    return (
        <>
            <input
                type='text' value={myData} onChange={(e) => setMyData(e.target.value)}
            />
            <p> The number of times render : {count.current} </p>



        </>
    )
}
export default UseRefTask; 
*/

import React, { useState, useRef } from 'react'
const UseRefTask = () => {

    const [myData, setMyData] = useState("");
    const inputElement = useRef("");

    const changeStyle = () => {
        //inputElement.current.style.backgroundColor = "red";
        inputElement.current.focus();
    }


    return (
        <>
            <input
                ref={inputElement}
                type='text' value={myData} onChange={(e) => setMyData(e.target.value)}
            />
            <button onClick={changeStyle}  >Submit</button>
        </>
    )
}
export default UseRefTask;