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
    const [storeEmail, setStoreEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        // data.map((item) => {
        //     if (password === confirmPassword) {
        //         setData([
        //             ...item,
        //             { name, email, password }
        //         ])
        //         console.log(item);
        //     }
        // })

        setStoreEmail(email);
        if (password === confirmPassword) {
            const emailExist = data.some((user) => user.email === email);
            if (!emailExist) {
                navigate("/");
                setData([
                    ...data,
                    { name, email, password }
                ])
            }
            else if (emailExist) {
                setExistence("email already exists");
            }
        }
        else {
            setShowPara("Incorrect password")
        }

    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        if (event.target.value !== storeEmail) {
            setExistence("");
        }

    }
    return (
        <div>
            <h3>Enter info for signup</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Enter your name:</label>
                <input required type="text" value={name} onChange={(event) => setName(event.target.value)} />
                <br />
                <label htmlFor="">Enter your email:</label>
                <input required type="text" value={email} onChange={handleEmailChange} />
                <br />
                <label htmlFor="">Enter your password:</label>
                <input required type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
                <br />
                <label htmlFor="">Enter your confirm password:</label>
                <input required type="text" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                <br />
                {showPara}
                <br />
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