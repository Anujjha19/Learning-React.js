
import React from 'react'
import ReactDOM from 'react-dom'

import Card from './component/Card'
import SeriesData from './SeriesData'


function netflixCard( SeriesDataval ){
    console.log(SeriesDataval);
    return (
        
        <Card
            imgSrc={SeriesDataval.imgSrc}
            genre={SeriesDataval.genre}
            seriesName={SeriesDataval.seriesName}
            link={SeriesDataval.link}
        />
    )
}

ReactDOM.render(
    <>
        <h1 className='heading_style heading'>A Netflix Original Series  </h1>

        {SeriesData.map(netflixCard)}
    </>

    , document.getElementById('root')
)