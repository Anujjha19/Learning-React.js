import React from "react";
import './App.css';

const SlotMachine = (props) => {

    // let x = '😁';
    // let y = '😁';
    // let z = '😁';

    // let { x,y,z} = props;  //Object Destructuring 

    let x = props.x;
    let y = props.y;
    let z = props.z;

    if ((x === y) && (y === z)) {
        return (
            <>
                <div className='slot_inner'>
                    <h2 className='match'>
                        {x} {y} {z}
                    </h2>
                    <h3>  It's Matching . 🎯 </h3>
                    <hr />
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className='slot_inner'>
                    <h2 className='match'>
                        {x} {y} {z}
                    </h2>
                    <h3>  It's Not Matching . ❌ </h3>
                    <hr />
                </div>
            </>
        )
    }
}

/* let points = 0;
    let icons = ["😃", "👏", "🎨"];
    let first = icons[Math.floor(Math.random() * icons.length)];
    let second = icons[Math.floor(Math.random() * icons.length)];
    let third = icons[Math.floor(Math.random() * icons.length)];

    const check = (first === second && second === third);
    if (check) {
    points++;
    }

 */

export default SlotMachine