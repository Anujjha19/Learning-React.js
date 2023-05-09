import React, { useReducer } from 'react'

const ACTIONS = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT"
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 }
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 }
        default:
            return state
    }
}


const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 })
    function increment() {
        dispatch({ type: ACTIONS.INCREMENT })
    }
    function decrement() {
        dispatch({ type: ACTIONS.DECREMENT })
    }


    return (
        <div>
            <button onClick={decrement}> ➖ </button>
            <span style={{ background: "red", color: 'black' }} > {state.count} </span>
            <button onClick={increment} > ➕ </button>
        </div>
    )
}

export default UseReducer