
import React, { useState } from "react";
import './App.css'

const Forms = () => {

    const [personDetailsAll, setPersonDetailsAll] = useState({
        fname: '',
        lname: '',
        email: '',
        no: '',
        message: '',
    });

    // Only One inputEvent
    const inputEventOnlyOne = (event) => {
        const { value, name } = event.target;

        setPersonDetailsAll((prevValue) => {

            return {
                ...prevValue,
                [name]: value,
            }
        })
    }

    // On Submit Change 
    const onSubmitShow = (e) => {
        e.preventDefault();
        alert('Form Submitted ')
        alert(`Your name is ${personDetailsAll.fname} ${personDetailsAll.lname}. Your email is ${personDetailsAll.email}. Your mobile no. is ${personDetailsAll.no}.`);

    }

    return (
        <>
            <div>
                <form onSubmit={onSubmitShow}>


                    <h1> Hello {personDetailsAll.fname} {personDetailsAll.lname}</h1>
                    <p> {personDetailsAll.email} </p>
                    <p> {personDetailsAll.no} </p>
                    <p> {personDetailsAll.message} </p>

                    <input type='text'
                        placeholder="Enter Name : "
                        name="fname"
                        onChange={inputEventOnlyOne}
                        value={personDetailsAll.fname}
                    />
                    <input type='text'
                        placeholder="Enter SurName : "
                        name="lname"
                        onChange={inputEventOnlyOne}
                        value={personDetailsAll.lname}
                    />
                    <input type='email'
                        placeholder="Enter Email : "
                        name="email"
                        onChange={inputEventOnlyOne}
                        autoComplete='off'
                        value={personDetailsAll.email}
                    />
                    <input type='number'
                        placeholder="Enter Mobile No. : "
                        name="no"
                        onChange={inputEventOnlyOne}
                        value={personDetailsAll.no}
                    />
                    <input type='message'
                        placeholder="Enter Message : "
                        name="messagelllllllllllllllllllllll"
                        onChange={inputEventOnlyOne}
                        value={personDetailsAll.message}
                    />

                    <button type="submit"
                    >Click Me </button>


                </form>
            </div>
        </>
    )
}

export default Forms;
