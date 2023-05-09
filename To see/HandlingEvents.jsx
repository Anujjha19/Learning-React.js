// import './App.css'
import React, { useState } from 'react';



const HandlingEvents = () => {

    const aqua = '#53d2eb96';
    const display = 'No Clicks , Sad 😒';

    const [val, setNewBG] = useState(aqua);
    const [name, setNewName] = useState(display);


    const eventClick = () => {
        let newval = '#f8ab1c'
        setNewBG(newval)
        setNewName(' You Clicked 1 , Ouch 😲  ')
    }
    const eventdblClick = () => {
        setNewBG(aqua);
        setNewName(' No 😶‍🌫️ You Double Click   ');
    }


    return (
        <>
            <div className="container" style={{
                backgroundColor: val,

                height: '100vh', width: '100vw'
            }}>

                <h3 className="heading"> Event Handling In React.Js .... {name} </h3>
                {/* <button className="btn"
                    onClick={eventClick}
                >
                    Click To Handle Events - OnClick
                </button> */}

                <button className="btn"
                    onClick={eventClick}
                    onDoubleClick={eventdblClick}
                    // onMouseOver={eventdblClick}
                >
                    Click To Handle Events - On DblClick
                </button>
            </div>

        </>
    );
}

export default HandlingEvents;
