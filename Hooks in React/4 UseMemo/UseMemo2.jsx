import React, { useState, useMemo } from 'react'

const UseMemo1 = () => {

    const [myNum, setMyNum] = useState(0);
    const [show, setShow] = useState(false);

    const getValue = () => {
        return setMyNum(myNum + 1)
    }

    const countNumber = (num) => {
        console.log(`🚀 ~ file : UseMemo1.jsx ~ line13 ~ countNumber ~ num `, num);
        for (let i = 0; i <= 10000000; i++) { }
        return num;
    }


    const checkData = useMemo(() => {
        return countNumber(myNum)
    }, [myNum])

    return (
        <div>
            <button onClick={getValue} style={{ backgroundColor: "red", textAlign: "center", justifyContent: "center" }} > Counter </button>
            <p> My new No : {checkData} </p>
            <button onClick={() => setShow(!show)} > {show ? " You Clicked Me " : " Click Me Please "} </button>
        </div>
    )
}

export default UseMemo1