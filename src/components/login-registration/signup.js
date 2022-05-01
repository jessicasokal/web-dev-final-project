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
        <div className={'row'}>
            <h1 className={'pt-4'}>Signup</h1>
            <div className={'col-4 p-2'}>
                <label>
                    <input
                        ref={adminRef}
                        type="radio"
                        className="form-control"
                        value={'admin'}
                        id={'admin'}
                        name={'typeOfUser'}
                    />
                    Admin
                </label>

                <label>
                    <input
                        ref={watcherRef}
                        type="radio"
                        className="form-control"
                        value={'watcher'}
                        id={'watcher'}
                        name={'typeOfUser'}
                    />
                    Movie Watcher
                </label>

                <label>
                    <input
                        ref={creatorRef}
                        type="radio"
                        className="form-control"
                        value={'creator'}
                        id={'creator'}
                        name={'typeOfUser'}
                    />
                    Movie Creator
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

/*

                <label>
                    <input
                        ref={adminRef}
                        type="radio"
                        className="form-control"
                        value={'admin'}
                        id={'admin'}
                        name={'typeOfUser'}
                    />
                    Admin
                </label>

                <label>
                    <input
                        ref={watcherRef}
                        type="radio"
                        className="form-control"
                        value={'watcher'}
                        id={'watcher'}
                        name={'typeOfUser'}
                    />
                    Movie Watcher
                </label>

                <label>
                    <input
                        ref={creatorRef}
                        type="radio"
                        className="form-control"
                        value={'creator'}
                        id={'creator'}
                        name={'typeOfUser'}
                    />
                    Movie Creator
                </label>
 */

/*

                <h4>User Type</h4>
                <select className={'dropdown'}>
                    <option
                        ref={adminRef}
                        type="radio"
                        className="form-control"
                        value={'admin'}
                        id={'admin'}
                        name={'typeOfUser'}
                    >
                        Admin
                    </option>

                    <option
                        ref={watcherRef}
                        type="radio"
                        className="form-control"
                        value={'watcher'}
                        id={'watcher'}
                        name={'typeOfUser'}>
                        Movie Watcher
                    </option>

                    <option
                            ref={creatorRef}
                            type="radio"
                            className="form-control"
                            value={'creator'}
                            id={'creator'}
                            name={'typeOfUser'}
                            >
                        Movie Creator
                    </option>
                </select>
 */