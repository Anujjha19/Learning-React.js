import React, { useEffect, useRef, useState } from 'react'

const UseREF = () => {

    const [name, setName] = useState("");

    const prevName = useRef('')
    useEffect(() => {
        prevName.current = name;
    })
    return (
        <div>

            <input type="text" name="" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />

            <h3> Name : {name} </h3>

            <h4> Previous Name : {prevName.current}</h4>


        </div>
    )
}

export default UseREF    