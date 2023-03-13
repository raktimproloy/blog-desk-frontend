import React from "react";
import PopularSectionStyle from "../style.module.css"

function PopularBlog ({blogData}) {
    return(
        <>
            <div className={`d-flex justify-content-start align-items-center text-start py-3 ${PopularSectionStyle.popularBlogContainer}`}>
                <img src={`${blogData?.BlogImageOne}`} alt="Popular Blog" className={PopularSectionStyle.popularBlogImage} />
                <div className={` ms-3 ${PopularSectionStyle.popularBlogTexts}`}>
                    <h5>{blogData?.title}</h5>
                    <p>{blogData?.postedTime}</p>
                </div>
            </div>
        </>
    )
}

export default PopularBlog;