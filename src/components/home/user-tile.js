import React from "react";
import {useProfile} from "../../contexts/profile-context";
import {Link} from "react-router-dom";
import './index.css';

const UserTile = ({user}) => {
    const {profile} = useProfile()

    return (
        <div className={'col-8'}>
            {profile &&
                (profile._id === user._id) &&
                <Link to={`/profile`} className='wd-username'>
                    <li className={'list-group-item'}>
                        @{user.username}
                    </li>
                </Link>
            }
            {
                (!profile || (profile._id !== user._id)) &&
                <Link to={`/profile/${user._id}`} className='wd-username'>
                    <li className={'list-group-item'}>
                        @{user.username}
                    </li>
                </Link>
            }

        </div>
    );
};

export default UserTile;

