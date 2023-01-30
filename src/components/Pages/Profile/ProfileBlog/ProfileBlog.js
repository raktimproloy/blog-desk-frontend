import React, { useEffect, useContext, useState } from "react";
import BlogStyleCss from "../style.module.css"
import ContextApi from "../../../../ContextApi/ContextApi";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function ProfileBlog({blogId}) {
    const {databaseApi} = useContext(ContextApi)
    const navigate = useNavigate();
    const [blogData, setBlogData] = useState({})

    useEffect(() => {
        axios.get(`${databaseApi}/blog/${blogId}`)
            .then(res => {
                setBlogData(res.data[0]);
            })
            .catch(err => {
                console.log(err);
            })
            
    }, [])
    const clickBlog = () => {
        navigate(`/blog?id=${blogId}`)
    }

    return(
        <div className="defaultBorder d-flex justify-content-between align-items-start p-4 my-3">
            <img src={`${databaseApi}/${blogData?.BlogImageOne}`} alt="Standard" className={BlogStyleCss.blogBigImageTwo} />
            <div className={`ms-4 ${BlogStyleCss.blogRightSide}`}>
                
                <h1 className="pointer" onClick={clickBlog}>{blogData?.title}</h1>
                <p>{blogData?.category}</p>
                <p className="mb-3">{blogData?.postedTime}</p>
                <p className={`mb-2`}>{blogData?.firstDescription?.slice(0, 170)}{blogData?.firstDescription?.length > 170 && <span> ...</span>}</p>
                {blogData?.firstDescription?.length > 170 && <p className="pointer" onClick={clickBlog}>See more</p>}
            </div>
        </div>
    )
}

export default ProfileBlog;