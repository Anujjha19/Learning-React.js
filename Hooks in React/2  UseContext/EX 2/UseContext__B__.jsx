import React, { useContext } from 'react';
import { FName, LName } from './App';


const UseContext = () => {

    const fname = useContext(FName)
    const lname = useContext(LName)
    return (
        <>
            <h3> My Fname : {fname}</h3>
            <h3> My Lname : {lname}</h3>
        </>
    )
}
export default UseContext