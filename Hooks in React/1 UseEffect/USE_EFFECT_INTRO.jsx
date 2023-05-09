
import React, { useEffect } from 'react';


const USEEffectIntro = () => {

    useEffect( () => {
        console.log("Hello Use Effect 1 ")
    })
    console.log("Hello Use Effect 2 ")
return (
    <>
        <div className="container">
            <h1 className="heading"> Hello Use Effect</h1>
        </div>
    </>
)
}

export default USEEffectIntro;

