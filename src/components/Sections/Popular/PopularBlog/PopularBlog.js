import React from "react";
import testImage from "../../../../images/testImage1.jpg"
import PopularSectionStyle from "../style.module.css"

function PopularBlog () {
    return(
        <>
            <div className={`d-flex justify-content-between align-items-center text-start py-3 ${PopularSectionStyle.popularBlogContainer}`}>
                <img src={testImage} alt="Popular Blog" className={PopularSectionStyle.popularBlogImage} />
                <div className={` ms-3 ${PopularSectionStyle.popularBlogTexts}`}>
                    <h5>This is a popular bolg title. Please watch this</h5>
                    <p>19 August 2022</p>
                </div>
            </div>
        </>
    )
}

export default PopularBlog;