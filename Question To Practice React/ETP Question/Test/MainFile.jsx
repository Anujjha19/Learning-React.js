import React, { useState } from 'react';

const ModalForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [visible, setVisible] = useState(false);
    const [modal, setModal] = useState(false);

    const handleName = (e) => {
        let namVal = e.target.value;
        setName(namVal);
    }
    const handleEmail = (e) => {
        let emailVal = e.target.value;
        setEmail(emailVal);
    }
    const handlePassword = (e) => {
        let passVal = e.target.value;
        setPassword(passVal);
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if (name === "" || email === "" || password === "") {
            alert('Enter Details')
        }
        else {
            setVisible(true);

        }
    }

    const handleForm = (e) => {
        e.preventDefault();
        if (setModal(true)) {
            setModal(false);
        }
        else {
            setModal(true);
        }
    }
    return (
        <>
            <button onClick={handleForm} >Display a Modal Window Form </button>
            <br /><br />

            {modal && <form onSubmit={handleSubmit}  >
                <label > Name : </label>
                <input type='text' value={name} onChange={handleName}  required/>
                <br /><br />
                <label > Email : </label>
                <input type='text' value={email} onChange={handleEmail} required />
                <br /><br />
                <label > Password : </label>
                <input type='password' value={password} onChange={handlePassword}  required/>
                <br /><br />

                <button>Submit</button>

                {visible && <div>
                    <p>Name : {name} </p>
                    <p> Email : {email} </p>
                    <p> Password : {password} </p>
                </div>}
            </form>
            }
        </>
    )
}

export default ModalForm;