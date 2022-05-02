import React, {useRef} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import isLoggedIn from "../../global/variables";

const api = axios.create({
    withCredentials: true
});

const Signout = () => {
    const navigate = useNavigate();

    const signout = async () => {
        const response = await api
            .post(("http://localhost:4000/api/logout"))
        isLoggedIn.makeFalse();
        navigate('/login');
    }

    return (
        <div>
            <button className={'btn btn-danger'}
            onClick={signout}>
                Signout
            </button>
        </div>
    );
};

export default Signout;
