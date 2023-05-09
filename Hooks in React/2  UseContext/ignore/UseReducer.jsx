/* 
It is used for state Mangemnet 
For Comlex State Logic 

Reducers are  pure function takes action and a state 
The Pure Function always return the same output if the same argument is passed 
it does not provide any side effects 

*/

import React, { useReducer } from 'react'


const initialState = 0;

const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
        return state + 1;
    } else {
        return state - 1;
    }
}

const UseReducer = () => {
    //const [count , setCount] = useState(0);


    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <p>{state}</p>
            <div className="btn">
                <button
                    onClick={() => dispatch({ type: "INCREMENT" })} >
                    Increment </button>
                <button
                    onClick={() => dispatch({ type: "DECREMENT" })} >
                    Decrement </button>
            </div>
        </>
    )
}
export default UseReducer;