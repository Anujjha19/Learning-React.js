import React from 'react'


import Netflix from './Netflix';
import AmazonPrime from './AmazonPrime';

import HeadingNetflix from './component/HeadingNetflix'
import HeadingAmazonPrime from './component/HeadingAmazonPrime';

const favPlatForm = 'Ama'

const FavS = () => {
    if ( favPlatForm === 'Netflix'){
        return (
            <>
            <HeadingNetflix />
            <Netflix />
            </>
        )
    }
    else{
        return (
            <>
            <HeadingAmazonPrime/>
            <AmazonPrime />
            </>
        )
    
    }
}




const  App = ()  => {
    return (
        <>
            < FavS />
        </>)

}

export default App;