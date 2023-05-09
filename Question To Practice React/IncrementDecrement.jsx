//Write a code for Incrementing and Decrementing the State Variable on Button clicked in React JS.


import React, { useState } from 'react';

const IncreDecremOnClick = () => {
    const [value, setNewValue] = useState(0);

    const Increment = () => {
        setNewValue(value + 1);
    };

    const Decrement = () => {
        if (value <= 0) {
            alert('No More Values to Decrement, Reached ZERO');
        } else {
            setNewValue(value - 1);
        }
    };

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        },
        center: {
            textAlign: 'center',
        },
        button_div: {
            marginTop: '20px',
        },
        button: {
            padding: '10px 20px',
            margin: '0 10px',
            borderRadius: '5px',
            backgroundColor: 'aqua',
            color: 'black',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.center}>
                <h1>{value}</h1>
                <div style={styles.button_div}>
                    <button style={styles.button} onClick={Increment}>
                        Increment +
                    </button>
                    <button style={styles.button} onClick={Decrement}>
                        Decrement -
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IncreDecremOnClick;
