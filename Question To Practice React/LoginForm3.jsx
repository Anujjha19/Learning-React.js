//Create a login form with three entries. When you will click on the submit button on the form it must show form is submitted and all the values that you are storing tn the fields must be shown on the header.


import React, { useState } from 'react';

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px'
    },
    label: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px',
        textAlign: 'left',
        width: '300px'
    },
    input: {
        padding: '5px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    },
    button: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px'
    }
};

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>
                    Full Name:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={styles.input} required />
                </label>
                <label style={styles.label}>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} required />
                </label>
                <label style={styles.label}>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} required />
                </label>
                <button type="submit" style={styles.button}>Submit</button>
            </form>
            {isSubmitted && (
                <div>
                    <h2>Username: {username}</h2>
                    <h2>Password: {password}</h2>
                    <h2>Email: {email}</h2>
                </div>
            )}
        </div>
    );
};

export default LoginForm;
