import React, {SyntheticEvent, useState} from 'react';
import {Redirect} from "react-router-dom";

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [redirect, setRedirect] = useState(false)

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()

        await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password}),
            credentials: "include"
        })
        setRedirect(true)
    }

    if (redirect) return <Redirect to="/" />

    return (
        <form onSubmit={submit}>
            <h1 className="h3 fw-normal">Please sign in</h1>
            <input type="email" className="form-control" placeholder="Email" required onChange={e => setEmail(e.target.value)}/>
            <input type="password" className="form-control" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    );
};

export default Login;