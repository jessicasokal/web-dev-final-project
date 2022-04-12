import React from "react";

import '../../vendors/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css';

const Login = () => {
    return(
        <div className={'p-5'}>
            <h5>Please sign in</h5>
            <form>
                <label>
                    Username
                    <input type={'text'}></input>
                </label>
                <label>
                    Password
                    <input type={'text'}></input>
                </label>
            </form>
            <button>Sign in</button>
            <button>Don't have an account? Register here</button>
        </div>
    )
}

export default Login;