import React, { useState } from 'react';
import './PracticeForm.css';

const PracticeForm = () => {
    const [fname, setFName] = useState('');
    const [fullNmae, setFullNmae] = useState('');

    const [lname, setLName] = useState()
    const [newLName, setNewLname] = useState()

    const inputChange1 = (e) => {
        setFName(e.target.value);
    };
    const inputChange2 = (e) => {
        setLName(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setFullNmae(fname);
        setNewLname(lname);
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-container">
                    <h1>Hello {fullNmae} {newLName}</h1>
                    <div className="input-row">
                        <label htmlFor="fname">First Name:</label>
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            onChange={inputChange1}
                            value={fname}
                        />
                    </div>
                    <div className="input-row">
                        <label htmlFor="lname">Last Name:</label>
                        <input
                            type="text"
                            id="lname"
                            name="lname"
                            onChange={inputChange2}
                            value={newLName}
                        />
                    </div>
                    <button type="submit">Click Me</button>
                </div>
            </form>
        </>
    );
};

export default PracticeForm;
