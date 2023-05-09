// ListNetflixSeriesJSX

import React from 'react'
import ReactDOM from 'react-dom'
//import './index.css'

const tech = " CSS "
const image = 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=900&t=st=1679538140~exp=1679538740~hmac=20d3f2560067020679b0bcb07357a7750ace65038a2690d8ff79e0e8bea15337'
const image2 = 'https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?w=900&t=st=1679538169~exp=1679538769~hmac=194fdd3ab4b59fb5a797bd7c60636170a3b6e8d8d593ef41157c2121815a933c'

const links = 'https://www.google.com'


const heading = {
    color: "rgb(134, 134, 226)",
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
    textShadow: "0px 2px 4px #ffe9c5",
    margin: "50px 0",
    fontFamily: " 'Josefin Sans', sans - serif"
}


ReactDOM.render(
    <>
        <h1 style={heading} >Internal {tech} & Inline {tech} Styling</h1>

        <div className="main_div"
            style={{
                
                display: "flex",
                justifyContent: "center",
                border: '2px solid red ',
                backgroundColor: "aqua",
            }}>
            <img src={image} alt='GudiPadwa' width={200} height={200} />


            <a href={links} target='_blanks'>
                <img src={image2} alt='GudiPadwa2' width={200} height={200} />
            </a>



            <a href='https://www.google.com' >
                <img src={image} alt='GudiPadwa2' width={200} height={200} />
            </a>



            <img src='https://img.freepik.com/premium-photo/seo-search-engine-optimization-text-wooden-cube-blocks-table-background-idea-strategy-advertising-marketing-keyword-content-concept_301012-3474.jpg?w=900' alt='GudiPadwa' width={200} height={200} />



        </div>
    </>, document.getElementById('root')
);


