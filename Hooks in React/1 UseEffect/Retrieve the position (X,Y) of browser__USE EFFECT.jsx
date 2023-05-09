import React, { useEffect, useState } from 'react'

const RetrievethepositionXY = () => {

    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);

    const logmousemove = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("UseEffect Called ")
        window.addEventListener("mousemove", logmousemove)
    }, [])

    return (
        <div>
            <h2> Retrieve the position (X,Y) of browser</h2>
            <h4> {X} </h4> :     <h4> {Y} </h4>
        </div>
    )
}

export default RetrievethepositionXY