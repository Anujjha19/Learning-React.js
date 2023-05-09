import React, { useState } from 'react'

const useState1 = () => {
    const [content, setNewContent] = useState("Anuj")
    const [count, setCount] = useState(0)

    const useStateHandler = (e) => {
        setNewContent("Anuj Jha")
        setCount(count + 1);
    }
    return (
        <>
            <h1> {content} : {count} </h1>
            <button onClick={useStateHandler}> Click</button>
        </>
    )
}

export default useState1
