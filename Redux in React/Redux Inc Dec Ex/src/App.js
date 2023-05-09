import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index'
const App = () => {


    const myState = useSelector((state) => state.changeNumber)

    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter App</h1>
            <div>
                <button onClick={() => dispatch(incNumber(5))}
                    style={styles.button} title='INCREMENT'>
                    ➕
                </button>
            </div>
            <input
                type="number"
                value={myState}
                style={styles.input}
            />
            <button onClick={() => dispatch(decNumber(2))}
                style={styles.button} title='DECREMENT' >
                ➖
            </button>

        </div>
    );
};


const styles = {
    button: {
        backgroundColor: '#4CAF50',
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '10px',
        cursor: 'pointer',
    },
    input: {
        padding: '12px 10px',
        margin: '10px',
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: '4px',
    },
};



export default App;
