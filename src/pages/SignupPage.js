import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../context/Context';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const { data, setData } = useContext(Context);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPara, setShowPara] = useState('');
    const [existence, setExistence] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (password === confirmPassword) {
            const emailExist = data.some((user) => user.email === email);
            if (!emailExist) {
                navigate("/");
                setData([
                    ...data,
                    { name, email, password }
                ])
            }
            else {
                setExistence("email already exists");
            }
        }
        else {
            setShowPara("Incorrect password")
        }
        // if (password === confirmPassword) {
        //     navigate("/")
        //     setData(
        //         [
        //             ...data,
        //             { name, email, password }
        //         ]
        //     )
        // }
        // else if (password !== confirmPassword) {
        //     setShowPara("Incorrect password");
        // }

    }


    return (
        <div>
            <h3>Enter info for signup</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Enter your name:</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                <br />
                <label htmlFor="">Enter your email:</label>
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
                <br />
                <label htmlFor="">Enter your password:</label>
                <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
                <br />
                <label htmlFor="">Enter your confirm password:</label>
                <input type="text" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                <br />
                {showPara}
                <b1 />
                {existence}
                <br />
                <button type='submit'>Signup</button>
            </form>
            <h5>Already have Account?</h5>
            <NavLink to="/"><button>Login</button></NavLink>
        </div>
    )
}

export default SignupPage