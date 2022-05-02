import React from 'react';
import axios from "axios";
const api = axios.create({
    withCredentials: true
});

const User = ({user}) => {

    const removeUser = async (user) => {
        try {
            await api.delete(`http://localhost:4000/api/users/${user._id}`)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <li className={'list-group-item'}>
            <div className={'row'}>
                <div className={'col-10'}>
                    <h5>@{user.username}</h5>
                </div>
                <div className={'col-2'}>
                    <button className={'btn btn-danger'}
                    onClick={() => removeUser(user)}>
                        Remove User
                    </button>
                </div>
            </div>

        </li>
    )
}

export default User;