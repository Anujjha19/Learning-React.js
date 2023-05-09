import React, { useState } from 'react'

const useStatewithObject = () => {

    const [name, setName] = useState({ fName: "", lName: "" })


    return (
        <div>
            <form >
                <h3> First Name </h3>
                <input
                    type="text"
                    placeholder='First Name'
                    value={name.fName}
                    onChange={(e) => {
                        setName({ ...name ,  fName: e.target.value })
                    }} />
                <h3> Last Name </h3>
                <input
                    type="text"
                    placeholder='Last Name'
                    value={name.lName}
                    onChange={(e) => {
                        setName({  ...name , lName: e.target.value })
                    }} />
            </form>
            <h2>    {name.fName}   {name.lName}    </h2>
            <p>    
            {JSON.stringify(name)}
            </p>
        </div>
    )
}

export default useStatewithObject