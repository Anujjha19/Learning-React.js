import React, { useMemo, useState } from 'react'

const UseMemo1 = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const IncrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const IncrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 200) i++;
        return counterOne % 2 === 0
    }, [counterOne])


    return (
        <div>
            <button onClick={IncrementOne}>CounterOne - {counterOne} </button>
            <span> {isEven ? "EVEN" : "ODD"} </span>
            <button onClick={IncrementTwo} >CounterTwo - {counterTwo} </button>
        </div>
    )
}

export default UseMemo1 
