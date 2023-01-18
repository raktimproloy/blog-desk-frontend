import React, { useEffect, useContext, useState } from "react";
import BlogStyleCss from "../style.module.css"
import ContextApi from "../../../../ContextApi/ContextApi";
import axios from "axios"

function ProfileBlog({blogId}) {
    const {databaseApi} = useContext(ContextApi)
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

    return(
        <div className="defaultBorder d-flex justify-content-between align-items-start p-4 my-3">

            <img src={`${databaseApi}/${blogData.BlogImageOne}`} alt="Standard Image" className={BlogStyleCss.blogBigImageTwo} />
            <div className={`ms-4 ${BlogStyleCss.blogRightSide}`}>
                <h1>{blogData.title}</h1>
                <p className="mb-3">Category</p>
                <p>{blogData.firstDescription}</p>
            </div>
        </div>
    )
}

export default ProfileBlog;