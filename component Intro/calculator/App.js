import React from 'react'

import { add, multiply, subtract, divide } from './component/calculator/CalculatorFunction';


function App() {
    var a = 10;
    var b = 7;

    return (
        <>
            <h2> Functions of a Calculator </h2>
            <h4> Two No are : {a} and {b} </h4>
            <ul>
                <li>Sum is : {add(a, b)} </li>
                <li>Multiply is : {multiply(a, b)} </li>
                <li>Subtract is : {subtract(a, b)} </li>
                <li>Divide is : {divide(a, b)} </li>
            </ul>

        </>
    )
};

export default App;