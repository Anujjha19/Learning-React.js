import React from "react";
import ReactDOM from "react-dom";

//import tech , {deployment , myName }  from './App'
import * as anyName  from './App'

ReactDOM.render(
  <>
    {/* <h1> {tech} </h1>  */} 
    <h1> { anyName.default} </h1>
    <ol>
      <li> React.js </li>
      <li> JavaScript </li>
      <li> BackEnd </li>
    </ol>
    {/* <h2> {deployment} is a Deployment Platform . </h2> */} 
    <h2> { anyName.deployment} is a Deployment Platform . </h2>

    {/* <h4> Info of - Mr. {myName()} </h4> */} 
    <h4> Info of - Mr. { anyName.myName()} </h4>



  </>,
  document.getElementById('root')
);