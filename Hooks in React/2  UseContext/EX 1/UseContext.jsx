
import React, { createContext } from 'react';
    
import ChildC from './ChildC'

const nameVlaue = createContext();
const genderValue = createContext();

function UseContext() {
    const name = "Anuj";
    const gender = 'Male'

    return (
        <>
            <nameVlaue.Provider value={name}>
                <genderValue.Provider value={gender}>
                    <ChildC></ChildC>
                </genderValue.Provider>
            </nameVlaue.Provider>
        </>
    )
}

export default UseContext;
export { nameVlaue, genderValue };