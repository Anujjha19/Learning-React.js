

/*  Create foutr  div with one imagae , onre logo one header and one button , when the user clicks on the buttion it will lead to that website . The image and header contain information about the div  eg. div refer to seasons moviees games etc. Use props to do the samwe */


import React from 'react';
import image from './download.jpg'
import './cbt1.css'
import Div from "./Div"
function Divs() {
    return (
        <div className="divs">
            <Div
                title="Seasons"
                image={image}
                logo={"https://via.placeholder.com/50x50.png?text=Season"}
                link="https://www.seasons.com/"
            />
            <Div
                title="Movies"
                image={image}
                logo="https://via.placeholder.com/50x50.png?text=Movie"
                link="https://www.movies.com/"
            />
            <Div
                title="Games"
                image={image}
                                logo="https://via.placeholder.com/50x50.png?text=Games"
                link="https://www.games.com/"
            />
            <Div
                title="Books"
                image={image}
                                logo="https://via.placeholder.com/50x50.png?text=Books"
                link="https://www.books.com/"
            />
        </div>
    );
}

export default Divs;
