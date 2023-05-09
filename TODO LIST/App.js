import React, { useState } from "react";
import './index.css'
import TODOList from './ToDOList.jsx'
const App = () => {

    const [inputList, setInputList] = useState('');
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value)
    }
    const ListOfitems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList('');
    }

    const deleteItems = (id) => {
        setItems((oldItems) => { 
            return oldItems.filter((arrElement, index) => {
                return index !== id;
            })
        });
    }

        
    return (
        <div className="main-div">
            <div className="center-div">
                <br />
                <h1> To Do List </h1>
                <br />
                <input type="text" placeholder="Add a Item "
                    value={inputList}
                    onChange={itemEvent} />
                <button onClick={ListOfitems} > + </button>
                <ol>
                    {/* <li> { inputList }</li> */}
                    {Items.map((itemVal, index) => {
                        return < TODOList
                            key={index}
                            id={index}
                            text={itemVal}
                            onSelect={deleteItems}
                        />
                    })}
                </ol>
            </div>
        </div>
    )
}

export default App;
