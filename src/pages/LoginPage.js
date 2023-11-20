import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import Context from '../context/Context';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { data, setContent } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        data.map((user) => {
            if (user.email === email && user.password === password) {
                navigate("/DashBoardPage");
                setContent(user);
            }
        })


    }
    return (
        <div>
            <h3>Login here</h3>
            <form onSubmit={handleSubmit}>
                <label>Enter your email:</label>
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
                <br />
                <label>Enter your password:</label>
                <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
                <br />
                <button>Login</button>
            </form>
            <p>If you don't have account signup here: </p>
            <NavLink to="/Signup"><button>Sign Up</button></NavLink>
        </div>
    )
}

export default LoginPage