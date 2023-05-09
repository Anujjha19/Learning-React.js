import React from 'react'
import ReactDOM from 'react-dom'

// import Card from './component/Card'
// import SeriesData from './SeriesData'

// import Heading from './component/Heading';

import App from './App'


ReactDOM.render(
    
    <App />

    , document.getElementById('root')
) 


/* Shifted To APP.js
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
} */

/* Shifted To APP.js
ReactDOM.render(
    <>
        <Heading />

        {SeriesData.map( (SeriesDataval , index ) => {
                return (
                    <Card
                        key = { SeriesDataval.id}
                        imgSrc={SeriesDataval.imgSrc}
                        genre={SeriesDataval.genre}
                        seriesName={SeriesDataval.seriesName}
                        link={SeriesDataval.link}
                    />
                )
            } 
        )}
    </>

    , document.getElementById('root')
) */