import React, {useEffect, useState} from 'react';
import User from "./user";

import axios from "axios";
const api = axios.create({
    withCredentials: false
});

const AdminUse = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await api.get("http://localhost:4000/api/users")
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    };

    return (
        <div className={'mt-4'}>
            <h3>Manage Users</h3>
            <ul className={'list-group'}>
            {users.map((u) => {
                return <User user={u}/>
                }
            )}
            </ul>
        </div>);
}

export default AdminUse;