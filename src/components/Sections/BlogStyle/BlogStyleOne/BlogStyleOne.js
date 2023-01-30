import React, { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import BlogStyleCss from "../style.module.css"
import ContextApi from "../../../../ContextApi/ContextApi";

import ImageOne from "../../../../images/building.jpeg"

function BlogStyleOne({blogData}) {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const {databaseApi} = useContext(ContextApi)
    useEffect(() => {
        if(blogData){
            setData(blogData)
        }
    }, [blogData])

    const clickBlog = () => {
        navigate(`/blog?id=${data._id}`)
    }
    return(
        <div className={`d-flex mb-4 ${BlogStyleCss.BlogStyleOneContainer}`}>
            <img src={`${databaseApi}/${data?.BlogImageOne}`} alt="Standard" />
            <div className={`ms-3 ${BlogStyleCss.BlogStyleOneText}`}>
                <h5 className="pointer" onClick={clickBlog}>{data?.title}</h5>
                <p>{data?.postedTime}</p>
            </div>
        </div>
    )
}

export default BlogStyleOne;