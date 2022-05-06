import React from "react";

const CommentTile = ({comment}) => {

    return (
        <div className={'row'}>
            <div className={'col-4'}>
                {JSON.stringify(comment.comment)}
            </div>
        </div>
    );
};
export default CommentTile;