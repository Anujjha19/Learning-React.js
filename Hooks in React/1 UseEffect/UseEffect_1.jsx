import React, { useEffect, useState } from 'react'

const UseEffect_1 = () => {
    const [content, setNewContent] = useState("Anuj")
    const [count, setCount] = useState("21")
    const [counter, setCounter] = useState(0)
    const [counter1, setCounter1] = useState(0)


    /*  useEffect( () => {
        console.log( "anuj jha ")
    },[]) */

    const useStateHandler = (e) => {
        setNewContent("Salary PM ")
        setCount("50000");
    }
    const Increment = (e) => {
        setCounter(counter + 1);
    }
    const Decrement = (e) => {
        setCounter1(counter1 - 1)
    }

    const Incremented = () => {
        for (let i = 0; i < 10; i++) {
            setCounter(prevCount => prevCount + 1);
        }
    };

    useEffect(() => {
        console.log("anuj jha ")
    }, [counter1, counter])

    return (
        <>
            <h1> {content} : {count} : {counter}  : {counter1} </h1>
            <button onClick={useStateHandler}> Click</button>
            <button onClick={Increment}> Increment </button>
            <button onClick={Decrement}> Decrement </button>
            <button onClick={Incremented}> Incremented by 10  </button>

        </>
    )
}

export default UseEffect_1
