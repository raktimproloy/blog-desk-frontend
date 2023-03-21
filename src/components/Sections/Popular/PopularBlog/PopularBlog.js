import React from "react";
import { useNavigate } from "react-router-dom";
import PopularSectionStyle from "../style.module.css"

function PopularBlog ({blogData}) {
    const navigate = useNavigate()

    const clickBlog = () => {
        navigate(`/blog?id=${blogData._id}`)
    }
    return(
        <>
            <div className={`d-flex justify-content-start align-items-center text-start py-3 ${PopularSectionStyle.popularBlogContainer}`}>
                <img src={`${blogData?.BlogImageOne}`} alt="Popular Blog" className={PopularSectionStyle.popularBlogImage} />
                <div className={` ms-3 ${PopularSectionStyle.popularBlogTexts}`}>
                    <h5 className="pointer" onClick={clickBlog}>{blogData?.title}</h5>
                    <p>{blogData?.postedTime}</p>
                </div>
            </div>
        </>
    )
}

export default PopularBlog;