import React, { useState, useEffect } from 'react'

const UseEffect = () => {

    const [num, setNum] = useState(0);
    const [numms, setNumms] = useState(0);
    useEffect( () => {
        alert("Button Clicked ")
    } , [] )
    return (
        <div>
            <h1> {num} </h1>
            {/*  <button onClick={(() => {
                setNum(num + 1)
            }, () => {
                alert("Button Clicked ")
            })} > Click 2️⃣ 👁️ - Use Effect </button> */}

            <button onClick={() => {
                setNum(num + 1)
            }} > Click 2️⃣👁️ - Use Effect </button>

            <br />
            <br />
            <button onClick={() => {
                setNumms(numms + 1)
            }} > Click 2️⃣👁️ - Use Effect </button>


        </div>
    )
}
export default UseEffect