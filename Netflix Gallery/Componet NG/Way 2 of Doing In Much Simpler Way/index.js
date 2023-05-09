import React from 'react'
import ReactDOM from 'react-dom'

import Card from './component/Card'
import SeriesData from './SeriesData'

ReactDOM.render(
    <>
        <h1 className='heading_style heading'>A Netflix Original Series  </h1>



        <Card
            imgSrc={SeriesData[0].imgSrc}
            genre={SeriesData[0].genre}
            seriesName={SeriesData[0].seriesName}
            link={SeriesData[0].link}
        />
        <Card
            imgSrc={SeriesData[1].imgSrc}
            genre={SeriesData[1].genre}
            seriesName={SeriesData[1].seriesName}
            link={SeriesData[1].link}
        />
        <Card
            imgSrc={SeriesData[2].imgSrc}
            genre={SeriesData[2].genre}
            seriesName={SeriesData[2].seriesName}
            link={SeriesData[2].link}
        />
        <Card
            imgSrc={SeriesData[3].imgSrc}
            genre={SeriesData[3].genre}
            seriesName={SeriesData[3].seriesName}
            link={SeriesData[3].link}
        />
        <Card
            imgSrc={SeriesData[4].imgSrc}
            genre={SeriesData[4].genre}
            seriesName={SeriesData[4].seriesName}
            link={SeriesData[4].link}
        />

    </>

    , document.getElementById('root')
)