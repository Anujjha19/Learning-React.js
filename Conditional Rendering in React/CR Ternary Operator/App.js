import React from 'react'


import Heading from './component/Heading';
import Netflix from './Netflix';
import Amazon from './Amazon'

const favPlatForm = 'Netflix'

/* const FavS = () => {
    if ( favPlatForm === 'Netflix'){
        return (
<Netflix />
        )
    }
    else{
        return (
            <Amazon />
        )
    
    }
} */




const App = () => {
    return (
        <>
            <Heading />
            {/* <FavS /> */}
            {favPlatForm === 'Netflix' ? <Netflix /> : <Amazon />};
        </>)

}

export default App;