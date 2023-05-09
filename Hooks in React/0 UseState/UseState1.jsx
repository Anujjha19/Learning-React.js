import React, { useState } from 'react'

const useState1 = () => {
    const [inputVal, setInputVal] = useState("Anuj")

    const onChange = (e) => {
        setInputVal(e.target.value)
    }
    return (
        <>
            <h1> {inputVal} </h1>
            <input type="text" placeholder='Enter Anything ' value={inputVal} onChange={onChange} />
        </>
    )
}

export default useState1
