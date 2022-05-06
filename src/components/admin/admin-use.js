import React, {useEffect, useState} from 'react';
import {useProfile} from "../../contexts/profile-context";
import {fetchAllUsers} from "../../services/user-service";
import User from "./user";

const AdminUse = () => {
    const {profile} = useProfile();
    const [users, setUsers] = useState([]);


    const fetchUsers = async () => {
        const users = await fetchAllUsers()
        setUsers(users)
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (<>
        {   profile &&
            <div className={'mt-4'}>
                { profile.isAdmin &&
                <>
                    <h3>Manage Users</h3>
                    <ul className={'list-group'}>
                        {users.map((u) => {
                            return <User user={u}/>
                        })}
                    </ul>
                </>}
            </div>
        }
        {
            (!profile || !profile.isAdmin) &&
            <h3 className={'mt-5'}>Contact your system admin for access to this resource.</h3>
        }

        </>);
}

export default AdminUse;