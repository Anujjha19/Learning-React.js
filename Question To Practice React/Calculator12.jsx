//Create Simple Calculator App in React JS.

/* 

import React, { useState } from "react";

function Calculator() {
    const [result, setResult] = useState("");

    const handleClick = (event) => {
        setResult(result.concat(event.target.name));
    };

    const handleClear = () => {
        setResult("");
    };

    const handleBackspace = () => {
        setResult(result.slice(0, -1));
    };

    const handleCalculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult("Error");
        }
    };

    return (
        <div className="calculator">
            <div className="display">{result}</div>
            <div className="buttons">
                <button className="clear" onClick={handleClear}>
                    Clear
                </button>
                <button className="backspace" onClick={handleBackspace}>
                    C
                </button>
                <button name="/" onClick={handleClick}>
                    /
                </button>
                <button name="7" onClick={handleClick}>
                    7
                </button>
                <button name="8" onClick={handleClick}>
                    8
                </button>
                <button name="9" onClick={handleClick}>
                    9
                </button>
                <button name="*" onClick={handleClick}>
                    *
                </button>
                <button name="4" onClick={handleClick}>
                    4
                </button>
                <button name="5" onClick={handleClick}>
                    5
                </button>
                <button name="6" onClick={handleClick}>
                    6
                </button>
                <button name="-" onClick={handleClick}>
                    -
                </button>
                <button name="1" onClick={handleClick}>
                    1
                </button>
                <button name="2" onClick={handleClick}>
                    2
                </button>
                <button name="3" onClick={handleClick}>
                    3
                </button>
                <button name="+" onClick={handleClick}>
                    +
                </button>
                <button className="zero" name="0" onClick={handleClick}>
                    0
                </button>
                <button name="." onClick={handleClick}>
                    .
                </button>
                <button className="equal" onClick={handleCalculate}>
                    =
                </button>
            </div>
        </div>
    );
}

export default Calculator;
 */

import React, { useState } from "react";
import "../src/Task/Task3.css";

const Task3 = () => {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(input + event.target.value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="row">
          <button value="7" onClick={handleInput}>
            7
          </button>
          <button value="8" onClick={handleInput}>
            8
          </button>
          <button value="9" onClick={handleInput}>
            9
          </button>
          <button value="/" onClick={handleInput}>
            /
          </button>
        </div>
        <div className="row">
          <button value="4" onClick={handleInput}>
            4
          </button>
          <button value="5" onClick={handleInput}>
            5
          </button>
          <button value="6" onClick={handleInput}>
            6
          </button>
          <button value="*" onClick={handleInput}>
            *
          </button>
        </div>
        <div className="row">
          <button value="1" onClick={handleInput}>
            1
          </button>
          <button value="2" onClick={handleInput}>
            2
          </button>
          <button value="3" onClick={handleInput}>
            3
          </button>
          <button value="-" onClick={handleInput}>
            -
          </button>
        </div>
        <div className="row">
          <button value="0" onClick={handleInput}>
            0
          </button>
          <button value="." onClick={handleInput}>
            .
          </button>
          <button onClick={handleClear}>C</button>
          <button value="+" onClick={handleInput}>
            +
          </button>
        </div>
        <button className="equal" onClick={handleEqual}>
          =
        </button>
      </div>
    </div>
  );
};

export default Task3;
