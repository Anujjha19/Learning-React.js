
import React, { useState } from "react";

import './PracticeForm.css'

const Forms = () => {

    const [personDetailsAll, setPersonDetailsAll] = useState({
        fname: '',
        lname: '',
        email: '',
        no: '',
        address:""
    });

    // Only One inputEvent
    const inputEventOnlyOne = (event) => {


        const { value, name } = event.target;

        setPersonDetailsAll((prevValue) => {
            // console.log( prevValue);
            if (name === 'fName') {
                return {
                    fname: value,
                    lname: prevValue.lname,
                    email: prevValue.email,
                    no: prevValue.no,
                                        address: prevValue.address,

                }
            } else if (name === 'lName') {
                return {
                    fname: prevValue.fname,
                    lname: value,
                    email: prevValue.email,
                    no: prevValue.no,
                    address: prevValue.address,

                }
            }
            else if (name === 'email') {
                return {
                    fname: prevValue.fname,
                    lname: prevValue.lname,
                    email: value,
                    no: prevValue.no,
                    address: prevValue.address,

                }
            }
            else if (name === 'no') {
                return {
                    fname: prevValue.fname,
                    lname: prevValue.lname,
                    email: prevValue.email,
                    no: value,
                    address: prevValue.address,

                }
            }
            else if (name === 'address') {
                return {
                    fname: prevValue.fname,
                    lname: prevValue.lname,
                    email: prevValue.email,
                    no: prevValue.no,
                    address: value,
                }
            }

        })


    }

    // On Submit Change 
    const onSubmitShow = (e) => {
        e.preventDefault();
        alert(`Your Name is ${personDetailsAll.fname} '${personDetailsAll.lname}. 
        Your Email is ${personDetailsAll.email}. 
        Your Number is ${personDetailsAll.no}.
        Your Address  is ${personDetailsAll.address}.
        `);

    }

    return (
        <>
            <div>
                <form onSubmit={onSubmitShow}>


                    <h1> Hello {personDetailsAll.fname} {personDetailsAll.lname}</h1>
                    <p> {personDetailsAll.email} </p>
                    <p> {personDetailsAll.no} </p>
                    <p> {personDetailsAll.address}</p>

                    <input type='text'
                        placeholder="Enter Name : "
                        name="fName"
                        onChange={inputEventOnlyOne}
                        value={personDetailsAll.fname}
                    />
                    <input type='text'
                        placeholder="Enter SurName : "
                        name="lName"
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
                    <input type='address'
                        placeholder="Enter Address : "
                        name="address"
                        onChange={inputEventOnlyOne}
                        autoComplete='off'
                        value={personDetailsAll.address}
                    />

                    <button type="submit"
                    >Click Me </button>


                </form>
            </div>
        </>
    )
}

export default Forms;
