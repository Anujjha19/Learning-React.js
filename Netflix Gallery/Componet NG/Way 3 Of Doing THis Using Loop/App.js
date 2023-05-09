import React from 'react'

import Card from './component/Card'
import SeriesData from './SeriesData'

import Heading from './component/Heading';


/* function netflixCard( SeriesDataval ){
    console.log(SeriesDataval);
    return (
        
        <Card
            imgSrc={SeriesDataval.imgSrc}
            genre={SeriesDataval.genre}
            seriesName={SeriesDataval.seriesName}
            link={SeriesDataval.link}
        />
    )
} */

const  App = ()  => {
    return (
        <>
            {/* <h1 className='heading_style heading'>A Netflix Original Series  </h1> */}
            <Heading />

            {SeriesData.map((SeriesDataval, index) => {
                return (
                    <Card
                        key={SeriesDataval.id}
                        imgSrc={SeriesDataval.imgSrc}
                        genre={SeriesDataval.genre}
                        seriesName={SeriesDataval.seriesName}
                        link={SeriesDataval.link}
                    />
                )
            }
            )}
        </>)

}

export default App;