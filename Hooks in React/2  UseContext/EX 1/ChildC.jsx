import React, { useContext } from "react";
import {nameVlaue , genderValue} from '../../src/UseContext';

function ChildC() { 
    const name = useContext(nameVlaue);
    const gender = useContext(genderValue);

    return(
        <>
            <h1> my name is {name} and gender is {gender} </h1>
        </>
    )
}

export default ChildC;