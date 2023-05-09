import React from 'react'
import './App.css'
const App = () => {


    //css modules and in-built css librries (styled components )

    //Internal CSS 
    const main = {
        margin: 0,
        padding: 0,
        backgroundColor: 'pink'
    }
    const btn = {
        backgroundColor: 'green',
        color: 'black',
        height: '100px',
        width: '150px'
    }


    return (
        <div>


            <div className="main" style={main} >       {/* Inline CSS  */}


                {/* Inline CSS  */}
                <h1 className='title' style={{ backgroundColor: 'black', color: 'white' }} > Css Styling </h1>

                <div className="mainbtn">
                    <button className='btn' style={btn}  > Click Me </button>

                </div>
            </div>




            {/* External CSS  */}
            <ul className='ul-li' >
                <li>A</li>
                <li>N</li>
                <li>U</li>
                <li>J</li>
            </ul>
        </div>
    )
}

export default App