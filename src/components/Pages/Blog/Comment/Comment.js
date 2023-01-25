import React, { useContext, useEffect, useState } from "react";
import MainBlogStyle from "../style.module.css"
import ContextApi from "../../../../ContextApi/ContextApi";
import axios from "axios";

const Comment = ({commentId}) => {
    const {databaseApi} = useContext(ContextApi)
    const [commentData, setCommentData] = useState({
        commentAuthor: "",
        comment: "",
        blogId: ""
    })
    const [commentAuthor, setCommentAuthor] = useState({
        
    })

    useEffect(() => {
        axios.get(`${databaseApi}/blog/comment/${commentId}`)
            .then(res => { 
                setCommentData(res.data[0]);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        if(commentData._id !== undefined){
            axios.get(`${databaseApi}/users/profile/${commentData.commentAuthor}`)
            .then(res => { 
                setCommentAuthor(res.data[0]);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [commentData])

    return(
        <>
        <div className={`d-flex align-items-center`}>
            <img src={`${databaseApi}/${commentAuthor.profileImage}`} alt="comment" className={MainBlogStyle.commentOwnerImage} />
            <div className="ms-5">
                <h5 className={MainBlogStyle.commentOwnerName}>{commentAuthor?.fullName}</h5>
                <p>{commentData.comment}</p>
            </div>            
        </div>
        </>
    )
}

export default Comment;