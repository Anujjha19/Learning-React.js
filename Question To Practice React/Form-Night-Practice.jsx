import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    // Email regex pattern for validation
   

    const [formData, setFormData] = useState(null);

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameError && !emailError &&  !phoneError) {
        setFormData({ name, email, phone });
        setName('');
        setEmail('');
        setPhone('');
    }
};

    const handleName = (e) => {
        let name = e.target.value;
        if (name.length < 3) {
            setNameError(true);
        } else {
            setNameError(false);
            setName(name);
        }
    };
 const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;
    const handleEmail = (e) => {
        let email = e.target.value;
        if (!emailPattern.test(email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
            setEmail(email);
        }
    };
    
    const handlePhone = (e) => {
        let phone = e.target.value;
        if (!phonePattern.test(phone)) {
            setPhoneError(true);
        } else {
            setPhoneError(false);
            setPhone(phone);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2 className="title">Login Form with Validation</h2>

                <div className="form-group">
                    <label htmlFor="name">Enter Name</label>
                    <input type="text" name="name" placeholder="Name" onChange={handleName} required />
                    <div className="error-msg">
                        {nameError ? (
                            <span style={{ color: 'red' }}>Name must be atleast 3 letters</span>
                        ) : " "}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Enter Email</label>
                    <input type="text" name="email" placeholder="Email" onChange={handleEmail} required />
                    <div className="error-msg" >
                        {emailError ? (
                            <span style={{ color: 'red' }}>Invalid Email</span>
                        ) : " "}
                    </div>
                </div>

                <div className="form-group" >
                    <label htmlFor="phone">Enter Phone Number</label>
                    <input type="text" name="phone" placeholder="Phone number" onChange={handlePhone} required />
                    <div className="error-msg" >
                        {phoneError ? (
                            <span style={{ color: 'red' }}>Number must have 10 digits </span>
                        ) : " "}
                    </div>
                </div>

                <button type="submit">Submit</button>
            </form>

            {formData && (
                <div className="form-data">
                    <h2>Form Data:</h2>
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>Phone: {formData.phone}</p>
                </div>
            )}
        </div>
    );
};

export default App;
