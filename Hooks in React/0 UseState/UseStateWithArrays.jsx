import React, { useState } from 'react'

const useState1 = () => {
    const [items, setItems] = useState([])

    const addItems = () => {
        setItems([...items , {
            id : items.length,
            value: Math.floor(Math.random() * 10 )
        }])
    }
    return (
        <>
            <button onClick={addItems} > A Random No </button>
            <ul>
                {items.map( (item) => ( <li> key = { item.id} , value : {item.value}  </li>))}
            </ul>
        </>
    )
}

export default useState1
