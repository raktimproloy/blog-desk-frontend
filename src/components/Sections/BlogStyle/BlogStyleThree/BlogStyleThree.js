import React, { useContext, useEffect, useState } from "react"
import BlogStyleCss from "../style.module.css"
import ContextApi from "../../../../ContextApi/ContextApi";
import axios from "axios";

import ImageOne from "../../../../images/building.jpeg"
import { Link, useNavigate } from "react-router-dom";

function BlogStyleThree({blogData}) {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const {databaseApi} = useContext(ContextApi)
    const [authorData, setAuthorData] = useState(null)

    useEffect(() => {
        if(blogData){
            console.log("BlogData",blogData);
            setData(blogData)
        }
    }, [blogData])

    useEffect(() => {
        if(data.author){
            axios.get(`${databaseApi}/users/profile/${data.author}`)
                .then(res => {
                    setAuthorData(res.data[0])
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [data])

    const clickBlog = () => {
            navigate(`/blog?id=${data._id}`)
    }
    const clickProfile = () => {
            navigate(`/profile?userId=${data.author}`)
    }
    return(
        <div className="defaultBorder d-flex justify-content-between align-items-center p-4 mb-2">
            <img src={`${databaseApi}/${data?.BlogImageOne}`} alt="Blog" className={BlogStyleCss.blogBigImageTwo}/>
            <div className={`ms-4 ${BlogStyleCss.blogRightSide}`}>
                <div className={`d-flex align-items-center py-2 ${BlogStyleCss.authorImage}`}>
                    <img src={ImageOne} alt="Author" />
                    <p className="pointer" onClick={clickProfile}>{authorData?.fullName}</p>
                    <p>{data?.postedTime}</p>
                </div>
                <h1 className="pointer" onClick={clickBlog}>{data?.title}</h1>
                <p className={`mb-2`}>{data?.firstDescription?.slice(0, 170)}{data?.firstDescription?.length > 170 && <span> ...</span>}</p>
                {data?.firstDescription?.length > 170 && <p className="pointer" onClick={clickBlog}>See more</p>}
            </div>
        </div>
    )
}

export default BlogStyleThree;