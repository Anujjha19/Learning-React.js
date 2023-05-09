
import React, { useState } from 'react'
import './App.css'
import RemoveIcon from '@mui/icons-material/Remove';import AddIcon from '@mui/icons-material/Add';
const IncreDecremOnClick = () => {
    const [value, setNewValue ] = useState(0);

    const Increment = () => {
        if( value <20) {
            setNewValue (value + 1)
        }else{
            alert ( ' Maxed Increment , Reached 20 ')
        }
    }
    const Decrement = () => {
        
        if( value <= 0) {
            alert ( ' No More Values to Decrement , Reached ZERO ')
        }else{
        setNewValue (value - 1);
        }
    }


    return (
        <div className="container">
            <div className="center">
                <h1> {value} </h1>
                <div className="button_div">
                    <button onClick={Increment} > <AddIcon /> </button>
                    <button onClick={Decrement} > <RemoveIcon/> </button>
                </div>
            </div>
        </div>
    )
}
export default IncreDecremOnClick;