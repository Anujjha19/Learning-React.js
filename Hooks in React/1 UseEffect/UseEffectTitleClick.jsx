import React, { useEffect, useState } from 'react'

const UseEffectTitleClick = () => {



    const [num , setNum] = useState(0);

    useEffect( () => {
        document.title= ` Title ${num} times  `
    })



    return (
        <div>
        <button
        onClick={ () => { setNum(num+1)}}
        > Click  {num} </button>
        </div>
    )
}


export default UseEffectTitleClick