import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

let currDate = new Date();
//let currDate = new Date(2023, 3, 23, 24);
const timeNow = currDate.toLocaleTimeString();
currDate = currDate.getHours();

let greeting = '';
const cssStyle = {
    fontWeight: "bold",
}

if (currDate >= 1 && currDate < 12) {
    greeting = " Good Morning ";
    cssStyle.color = "green"
} else if (currDate >= 12 && currDate < 19) {
    greeting = " Good Afternoon "
    cssStyle.color = "Orange"
}
else {
    greeting = " Good Night "
    cssStyle.color = "Black "
}

ReactDOM.render(
    <div className='main_div'>
        <h1>Hello Sir, Welcome . It's , <span style={cssStyle}> {timeNow} </span></h1>
        <p> The Time is {currDate}, Greetings :  <span style={cssStyle}>  {greeting} </span> </p>

    </div>
    , document.getElementById('root')
)

/* External CSS 

body {
    background-color: #b4f2e1;
    box-sizing: border-box;
    margin: 0;
    padding: 0%;
    font-family: 'Josefin Sans', sans-serif;;
  }
  
  div {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -30px;
  }
  
  h1 , p{
    background-color: white;
    align-items: center;
    padding: 30px;
    border-radius: 25px;
  
  }
  
*/