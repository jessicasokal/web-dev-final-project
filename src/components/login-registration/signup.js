import React, {useRef} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const adminRef = useRef()
    const watcherRef = useRef()
    const creatorRef = useRef()
    const emailRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const handleSignupBtn = async () => {
        try {
            await axios.post("http://localhost:4000/api/signup", {
                isAdmin: adminRef.current.checked,
                isWatcher: watcherRef.current.checked,
                isCreator: creatorRef.current.checked,
                email: emailRef.current.value,
                username: usernameRef.current.value,
                password: passwordRef.current.value
            })
            navigate('/signin')
        } catch (e) {
            alert('oops')
        }
    }
    return (
        <div>
            <h1>Signup</h1>
            <div>
                <input
                    ref={adminRef}
                    type="radio"
                    className="form-control"
                    value={'admin'}
                    id={'admin'}
                    name={'typeOfUser'}
                />
                <label htmlFor={'admin'}>Admin</label>

                <input
                    ref={watcherRef}
                    type="radio"
                    className="form-control"
                    value={'watcher'}
                    id={'watcher'}
                    name={'typeOfUser'}
                />
                <label htmlFor={'watcher'}>Movie Watcher</label>

                <input
                    ref={creatorRef}
                    type="radio"
                    className="form-control"
                    value={'creator'}
                    id={'creator'}
                    name={'typeOfUser'}
                />
                <label htmlFor={'creator'}>Movie Creator</label>
            </div>

            <input ref={emailRef}
                   placeholder="email"
                   type="email"
                   className="form-control"/>
            <input ref={usernameRef}
                   placeholder="username"
                   type="text"
                   className="form-control"/>
            <input ref={passwordRef}
                   placeholder="password"
                   type="password"
                   className="form-control"/>
            <button onClick={handleSignupBtn}
                    className="btn btn-primary">
                Signup</button>
        </div>
    );
};

export default Signup;