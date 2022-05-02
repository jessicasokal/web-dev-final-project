import React, {useRef} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import isLoggedIn from "../../global/variables";

const api = axios.create({
    withCredentials: true
});

const Signin = () => {
    const usernameRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const handleSigninBtn = async () => {
        try {
            await api.post("http://localhost:4000/api/login", {
                username: usernameRef.current.value,
                password: passwordRef.current.value
            })
            isLoggedIn.makeTrue();
            navigate('/profile')
        } catch (e) {
            alert(e)
        }
    }
    return (
        <div className={'pt-4'}>
            <h1>Signin</h1>
            <input
                ref={usernameRef}
                placeholder="username"
                type="text"
                className="form-control m-3"
            />
            <input
                ref={passwordRef}
                placeholder="password"
                type="password"
                className="form-control m-3"
            />
            <button
                onClick={handleSigninBtn}
                className="btn btn-primary m-2 ms-3">
                Signin
            </button>
        </div>
    );
};

export default Signin;