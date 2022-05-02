import React, {useRef} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const api = axios.create({
    withCredentials: true
});

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
            await api.post("http://localhost:4000/api/register", {
                isAdmin: adminRef.current.checked,
                isWatcher: watcherRef.current.checked,
                isCreator: creatorRef.current.checked,
                email: emailRef.current.value,
                username: usernameRef.current.value,
                password: passwordRef.current.value
            })
            navigate('/login')
        } catch (e) {
            alert('oops')
        }
    }
    return (
        <div className={'row pt-4'}>
            <h1>Signup</h1>
            <div className={'col-4 p-2'}>
                <h3>User Type</h3>
                <label className={'pt-4 ps-4'}>
                    <input
                        ref={adminRef}
                        type="radio"
                        className="form-check-input"
                        value={'admin'}
                        id={'admin'}
                        name={'typeOfUser'}
                    />
                    <span className={'ps-4'}>Admin</span>
                </label>
                <br/>
                <label className={'pt-4 ps-4'}>
                    <input
                        ref={watcherRef}
                        type="radio"
                        className="form-check-input"
                        value={'watcher'}
                        id={'watcher'}
                        name={'typeOfUser'}
                    />
                    <span className={'ps-4'}>Moderator</span>
                </label>
                <br/>
                <label className={'pt-4 ps-4'}>
                    <input
                        ref={creatorRef}
                        type="radio"
                        className="form-check-input"
                        value={'creator'}
                        id={'creator'}
                        name={'typeOfUser'}
                    />
                    <span className={'ps-4'}>User</span>
                </label>

            </div>

            <div className={'col-8'}>
                <div className={'row pt-4'}>
                    <div className={'col-2'}>
                        <h5>Email:</h5>
                    </div>
                    <div className={'col-10'}>
                        <input ref={emailRef}
                               placeholder="email"
                               type="email"
                               className="form-control"/>
                    </div>
                </div>

                <div className={'row pt-2'}>
                    <div className={'col-2'}>
                        <h5>Username:</h5>
                    </div>
                    <div className={'col-10'}>
                        <input ref={usernameRef}
                               placeholder="username"
                               type="text"
                               className="form-control"/>
                    </div>
                </div>

                <div className={'row pt-2'}>
                    <div className={'col-2'}>
                        <h5>
                            Password:
                        </h5>
                    </div>
                    <div className={'col-10'}>
                        <input ref={passwordRef}
                               placeholder="password"
                               type="password"
                               className="form-control"/>
                    </div>
                </div>

                <div className={'pt-4'}>
                    <button onClick={handleSignupBtn}
                            className="btn btn-primary">
                        Signup</button>
                </div>

            </div>
        </div>
    );
};

export default Signup;
