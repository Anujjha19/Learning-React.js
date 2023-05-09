
import React, {  useMemo, useState } from 'react';


function USEMEMO() {
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(0);

    const multiplication = useMemo( function multiply () {
        console.log("**********************")
        return add*10 ;
    } , [add] )

    return (
        <>
            <div className="container">
                <h1 className="heading"> Learning USE MEMO </h1>
                <br />
                <h1>{multiplication}</h1>
                <br />
                <button className="btn" onClick={() => setAdd(add + 1)}>Addition</button>
                <span>{add}</span>
                <button className="btn" onClick={() => setMinus(minus - 1)}>Subtraction</button>
                <span>{minus}</span>
            </div>
        </>
    )

}

export default USEMEMO;