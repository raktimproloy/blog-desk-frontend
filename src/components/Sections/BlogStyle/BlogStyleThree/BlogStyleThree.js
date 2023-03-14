import React, { useContext, useEffect, useState } from "react"
import BlogStyleCss from "../style.module.css"
import ContextApi from "../../../../ContextApi/ContextApi";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

function BlogStyleThree({blogData}) {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const {databaseApi} = useContext(ContextApi)
    const [authorData, setAuthorData] = useState(null)

    useEffect(() => {
        if(blogData){
            setData(blogData)
        }
    }, [blogData])

    useEffect(() => {
        if(data.author){
            axios.get(`${databaseApi}/blog/author/${data.author}`)
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
            navigate(`/author?userId=${data.author}`)
    }
    return(
        <div className="defaultBorder d-flex justify-content-between align-items-center p-4 mb-2 row">
            <img src={`${data?.BlogImageOne}`} alt="Blog" className={`${BlogStyleCss.blogBigImageTwo} col-md-6`}/>
            <div className={`${BlogStyleCss.blogRightSide} col-md-6`}>
                <div className={`d-flex align-items-center py-2 ${BlogStyleCss.authorImage}`}>
                    <img src={`${authorData?.profileImage}`} alt="Author" />
                    <p className="pointer" onClick={clickProfile}>{authorData?.fullName}</p>
                    <p>{data?.postedTime}</p>
                </div>
                <h1 className="pointer" onClick={clickBlog}>{data?.title}</h1>
                <p className={`mb-2`}>{data?.firstDescription?.slice(0, 160)}{data?.firstDescription?.length > 160 && <span> ...</span>}</p>
                {data?.firstDescription?.length > 160 && <p className="pointer" onClick={clickBlog}><u>See more</u></p>}
            </div>
        </div>
    )
}

export default BlogStyleThree;