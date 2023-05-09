// ListNetflixSeriesJSX

import React from 'react'
import ReactDOM from 'react-dom'


const name = "anuj"
const image = 'https://img.freepik.com/free-vector/hand-drawn-gudi-padwa-concept_23-2148470422.jpg?w=740&t=st=1679500066~exp=1679500666~hmac=ff59bf303ec8b81c00ed01dc227f882a0998da9edc4e3efe0fb1c1faad29a118' 
const image2 = 'https://img.freepik.com/premium-photo/indian-festival-gudi-padwa-marathi-new-year_54391-3036.jpg?w=900'

const links = 'https://www.google.com'



const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();



ReactDOM.render(
    <>
        <h1 contentEditable='true' >My name is {name} </h1>
        <img src= {image} alt='GudiPadwa'  width={200} height={200} />

        <a href= {links} target= '_blanks'>
        <img src= {image2} alt='GudiPadwa2'  width={200} height={200} />
        </a>

        <a href='https://www.google.com' >
        <img src= {image} alt='GudiPadwa2'  width={200} height={200} />
        </a>

        <img src='https://img.freepik.com/free-vector/flat-design-gudi-padwa-event_23-2148453678.jpg?w=740&t=st=1679499523~exp=1679500123~hmac=c57e4da48816cc4b74974cfd136c1cec7292a95f20eae3a70d902eb0311d9baa' alt='GudiPadwa'  width={200} height={200} />



        <p>Current Date is : {currDate}</p>
        <p> Current Time is : {currTime}</p>
    </>, document.getElementById('root')
);


