import React from 'react'
import './component/Card.css'
import Card from './component/Card'
import SeriesData from './SeriesDataNetflix'
import Heading from './component/Heading';


const  Netflix = ()  => {
    return (
        <>
            {/* <h1 className='heading_style heading'>A Netflix Original Series  </h1> */}

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

export default Netflix;