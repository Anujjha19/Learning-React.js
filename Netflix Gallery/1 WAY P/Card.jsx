import React from 'react'


function Card(props) {    
    return (
        <>
            <div className='cards'>
                {/* <h1>A Netflix Original Series  </h1> */}
                <div className="card">
                    <img src={props.imgSrc} alt="React Props " className='card_img' />
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