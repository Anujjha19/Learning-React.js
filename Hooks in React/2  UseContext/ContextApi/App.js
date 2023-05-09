import React, { createContext } from 'react';
import CompA from './CompA';

const FName = createContext();
const LName = createContext()
const App = () => {
    return (
        <>
            <FName.Provider value={"Anuj"}>
                <LName.Provider value={"Jha"} >
                    <CompA />
                </LName.Provider>
            </FName.Provider>
        </>
    );
};

export default App;
export { FName, LName };