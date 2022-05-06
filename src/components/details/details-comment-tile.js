import React from "react";
import {Link} from "react-router-dom";
import './index.css';
import {useProfile} from "../../contexts/profile-context";
import {removeComment} from "../../services/movie-service";

const DetailsCommentTile = ({comment, movie}) => {
    const {profile} = useProfile()

    const removeMyComment = async () => {
        await removeComment(movie, comment)
    }

    return (<>
        <Link to={`/profile/${comment.profile_id}`} className={'wd-no-underline'}>
            <div className={'row list-group-item'}>
                    <div className={'wd-no-underline col-10'}>
                        <h4><span className={'wd-username-comment'}>@{comment.profile_username}: </span>{comment.comment}</h4>
                    </div>
            </div>
        </Link>
    {   profile && profile.isWatcher &&
    <div className={'row justify-content-center'}>
        <button className={'btn btn-danger wd-button-remove m-3 col-2'}
                onClick={removeMyComment}>
            Remove Comment
        </button>
    </div>
    }
    </>
    );
};
export default DetailsCommentTile;