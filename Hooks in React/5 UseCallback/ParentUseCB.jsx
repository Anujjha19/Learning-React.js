import React, { useCallback, useState } from 'react'
import Child from './ChildUseCB';

const Parent = () => {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState([]);

    const IncrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const fun = useCallback( () => {
        console.log( "Hello AJ Parent C ")
    } , counterTwo)

    return (
        <div>

            <Child  counterTwo={counterTwo} fun={fun} />

            <button onClick={IncrementOne}>CounterOne - {counterOne} </button>



        </div>
    )
}

export default Parent