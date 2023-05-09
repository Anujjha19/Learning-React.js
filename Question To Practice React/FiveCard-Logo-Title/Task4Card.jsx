import React from "react";

const Card = ({ image, logo, header1, header2 }) => {
    const linkTo = "https://www.google.com";
    return (
        <a href={linkTo} target="_blank" rel="noopener noreferrer">
            <div className="card">
                <img src={image} alt="card-img" />
                <img src={logo} alt="card-logo" />
                <h2>{header1}</h2>
                <h3>{header2}</h3>
            </div>
        </a>
    );
};

export default Card;
