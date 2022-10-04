import React from "react";
import Comment from "./Comment";

const commenst = [
    {
        name: "Donggun",
        comment: "This is my first Component",
    },
    {
        name: "Donggun",
        comment: "This is my second Component",
    },
    {
        name: "Donggun",
        comment: "This is my third Component",
    },
];

function CommentList(props) {
    return (
        <div>
            {commenst.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;