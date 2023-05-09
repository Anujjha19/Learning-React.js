import React, { useRef, useState } from 'react'

const UseREF = () => {

    const [num, setNum] = useState(0);

    const getNumBox = () => {
        console.log('Hello')
        console.log(inputOne.current.value)
        inputOne.current.style.backgroundColor = "red";
        inputOne.current.style.width = "500px";

    }
    const getTextBox = () => {
        console.log('World')
        console.log(inputTwo.current.value)
    }

    const inputOne = useRef()
    const inputTwo = useRef()


    return (
        <>
            <h2>useRef hook in reactjs l </h2>
            <input
                ref={inputOne}
                style={{ width: "100px" }}
                type="number"
                value={num}
                onChange={e => setNum(num + 1)}
            />
            <input
                ref={inputTwo}
                type="text"
                value={num}
                onChange={e => setNum(num + 1)}
            />
            <h3>Value is : {num} </h3>
            <button
                onClick={() => getNumBox()}
            >Rupees</button>
            <button onClick={() => getTextBox()}
            >Dollars</button>

        </>
    )
}

export default UseREF