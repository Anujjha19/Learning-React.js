import React from 'react'
import ReactDOM from 'react-dom'


const fname = 'anuj';
const lname = 'jha';

ReactDOM.render(
    <>
        <h1> My name is {fname} {lname} </h1>
        <h3> Name is : {fname + " " + lname} </h3>
        <h5>{` Name  : ${fname} ${lname} `}</h5>
        <p> my Age is {20 + 1} </p>
    </>,
    document.getElementById('root')
)