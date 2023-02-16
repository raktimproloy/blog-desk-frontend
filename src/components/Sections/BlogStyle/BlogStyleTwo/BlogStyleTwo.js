import React, { useContext, useEffect, useState } from "react"
import BlogStyleCss from "../style.module.css"
import ContextApi from "../../../../ContextApi/ContextApi";
import axios from "axios";

import ImageOne from "../../../../images/building.jpeg"
import { Link, useNavigate } from "react-router-dom";

function BlogStyleTwo({blogData}) {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const [authorData, setAuthorData] = useState({})
    const {databaseApi} = useContext(ContextApi)
    useEffect(() => {
        if(blogData){
            setData(blogData)
        }
    }, [blogData])

    useEffect(() => {
        if(data.author){
            axios.get(`${databaseApi}/users/profile/${data?.author}`)
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
        <div>
            <img src={`${databaseApi}/${data?.BlogImageOne}`} alt="Standard" className={BlogStyleCss.blogBigImage}/>
            <div className={`d-flex align-items-center py-2 mt-2 ${BlogStyleCss.authorImage}`}>
                <img src={`${databaseApi}/${authorData?.profileImage}`} alt="Author" className="ms-4 me-2" />
                <p className="pointer" onClick={clickProfile}>{authorData?.fullName}</p>
                <p className={`${BlogStyleCss.blogTwoPostedTime} text-end`}>{data?.postedTime}</p>
            </div>
            <h4 className="pointer" onClick={clickBlog}>{data?.title}</h4>
            <p className={`mb-2 meta`}>{data?.firstDescription?.slice(0, 135)}{data?.firstDescription?.length > 135 && <span> ...</span>}</p>
            {data?.firstDescription?.length > 135 && <p className="pointer" onClick={clickBlog}><u>See more</u></p>}
            
        </div>
    )
}

export default BlogStyleTwo;