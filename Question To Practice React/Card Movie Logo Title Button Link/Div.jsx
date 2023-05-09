import React from 'react';
import './cbt1.css'


function Div(props) {
    return (
        <div className="div">
            <img src={props.image} alt={props.title} />
            <div className="div-info">
                <h2>{props.title}</h2>
                <img src={props.logo} alt={props.title} />
            </div>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <button>Visit Website</button>
            </a>
        </div>
    );
}


export default Div