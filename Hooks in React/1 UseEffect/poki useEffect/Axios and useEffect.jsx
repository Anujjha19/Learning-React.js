import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'


const AxiosanduseEffect = () => {

    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [move, setMoves] = useState();

    useEffect( () => {
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res.data.name);
            setName(res.data.name);
            setMoves(res.data.moves.length)
        }
        getData();
    })

    return (
        <div>
            <h1> You Chose {num} from the Option Below  </h1>
            <select value={num} onChange={(event) => {
                setNum(event.target.value)
            }}>
                <option value="1" >1</option>
                <option value="25" >25</option>
                <option value="3" >3</option>
                <option value="4" >4</option>
                <option value="5" >5</option>
            </select>
            <h5> It is {name} and moves are {move} </h5>

        </div>
    )
}


export default AxiosanduseEffect