import React from 'react'
import ReactDOM from 'react-dom'


/*  //Pure JS 
var h1 = document.createElement('h1');
h1.innerHTML =' Hello ANUJ !! ';
document.getElementById('root').appendChild(h1);
 */


//Earlier Way To Render In React
/* ReactDOM.render(
    [
        <h1> Hello World ! </h1>,
        <h1> Hello World ! </h1>,
        <h1> Hello World ! </h1>,
        <h1> Hello World ! </h1>
    ],
    document.getElementById('root')
) 
*/


ReactDOM.render(
    <React.Fragment>
        <h1> Hello World ! </h1>
        <h1> Hello World ! </h1>
        <h1> Hello World ! </h1>
        <h1> Hello World ! </h1>
    </React.Fragment>,
    document.getElementById('root')
) 
