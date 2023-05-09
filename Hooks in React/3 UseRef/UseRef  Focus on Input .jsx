import React, { useRef, useState } from 'react'

const UseREF = () => {

    const [name, setName] = useState("");


    /* const renderCount = useRef(0)
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    }) */

    const inputRef = useRef()
    function focus() {
        inputRef.current.focus()
    }

    const changeStyle = () => {
        inputRef.current.style.backgroundColor = "#82E0AA"
    }

    return (
        <div>

            <input ref={inputRef} type="text" name="" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />

            <h3> Name : {name} </h3>
            {/* <h5>Page render {renderCount.current} times  </h5> */}

            <button onClick={() => {
                focus();
                changeStyle();
            }}>On Click 👁️</button>

        </div>
    )
}

export default UseREF