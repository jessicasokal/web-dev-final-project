import React from "react";

import '../../vendors/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css';

const Register = () => {
    return(
        <div className={'p-5'}>
            <div className={'row'}>
                <h5>Create an account</h5>
            </div>
            <label className={'row pb-3'}>
                Account Type
                <form>
                    <input type='radio' value={'reviewer'} id='review'></input>
                    <label htmlFor={'reviewer'}>Movie Reviewer</label>
                    <br/>
                    <input type='radio' value={'creator'} id='create'></input>
                    <label htmlFor={'creator'}>Movie Creator</label>
                    <br/>
                    <input type='radio' value={'admin'} id='admin'></input>
                    <label htmlFor={'admin'}>Admin</label>
                </form>
            </label>
            <form>
                <label className={'row'}>
                    Username
                    <br/>
                    <input type={'text'}></input>
                </label>
                <label className={'row'}>
                    Password
                    <input type={'text'}></input>
                </label>
            </form>
            <button className={'mt-4'}>Create account</button>
            <button className={'mt-4'}>Already have an account? Sign in here.</button>
        </div>
    )
}

export default Register;