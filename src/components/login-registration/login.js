import React, {useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useProfile} from "../../contexts/profile-context.js";

const Login = () => {
    const usernameRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const {signin} = useProfile()

    const handleSigninBtn = async () => {
        try {
            await signin(
                usernameRef.current.value,
                passwordRef.current.value
            )
            navigate('/profile')
        } catch (e) {
            alert('Incorrect username or password')
        }
    }
    return (
        <div className={'pt-4'}>
            <h1>Login</h1>
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

export default Login;