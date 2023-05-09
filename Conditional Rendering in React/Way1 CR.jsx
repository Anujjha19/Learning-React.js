import React from 'react'

import Card from './component/Card'
import SeriesData from './SeriesDataNetflix'

import Heading from './component/Heading';

const favPlatForm = 'Netflix'

const FavS = () => {
    if ( favPlatForm === 'Netflix'){
        return (
            <Card
                key={SeriesData[1].id}
                imgSrc={SeriesData[1].imgSrc}
                genre={SeriesData[1].genre}
                seriesName={SeriesData[1].seriesName}
                link={SeriesData[1].link}
            />
        )
    }
    else{
        return (
            <Card
                key={SeriesData[3].id}
                imgSrc={SeriesData[3].imgSrc}
                genre={SeriesData[3].genre}
                seriesName={SeriesData[3].seriesName}
                link={SeriesData[3].link}
            />
        )
    
    }
}




const  App = ()  => {
    return (
        <>
            <Heading />
            < FavS />
        </>)

}

export default App;