


import React, { useState } from "react";
import './App.css'

const Forms = () => {

    // For First Name 
    const [name, setName] = useState("");
    const [fullNmae, setFullName] = useState();


    // For Last Name 
    const [lastName, setLastName] = useState("");
    const [lastN, setLastN] = useState("");

    const inputEvent2 = (event) => {
        setLastName(event.target.value);
    }


    // For First Name 
    const inputEvent = (event) => {
        setName(event.target.value);
    }

    // On Submit Change 
    const onSubmitShow = (e) => {
        e.preventDefault()
        setFullName(name)
        setLastN(lastName)
    }

    return (
        <>
            <div>
                <form onSubmit={onSubmitShow}>


                    <h1> Hello {fullNmae} {lastN} </h1>
                    
                    <input type='text'
                        placeholder="Enter Name : "
                        onChange={inputEvent}
                        value={name}
                    />
                    <input type='text'
                        placeholder="Enter SurName : "
                        onChange={inputEvent2}
                        value={lastN}
                    />

                    <button type="submit"
                    >Click Me </button>


                </form>
            </div>
        </>
    )
}

export default Forms;
