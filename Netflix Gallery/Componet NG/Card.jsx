import React from 'react'
import './Card.css'

import Images from './ImageComponent'
function Card(props) {

    return (
        <>
            <div className='cards'>
                {/* <h1>A Netflix Original Series  </h1> */}
                <div className="card">
                    {/* <img src={props.imgSrc} alt="React Props " className='card_img' /> */}
                    {<Images imgSrc= {props.imgSrc} />}
                    <div className="card_info">
                        <span className="card_category"> {props.genre}  </span>
                        <h3 className="card_title"> {props.seriesName}   </h3>
                        <a href={props.link} target=' '>
                            <button> Watch Now </button>
                        </a>
                    </div>
                    <br />
                </div>
            </div>
        </>
    )
}

export default Card