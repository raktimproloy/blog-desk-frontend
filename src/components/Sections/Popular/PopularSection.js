import React from "react";
import PopularBlog from "./PopularBlog/PopularBlog"

function PopularSection(){
    return(
        <>
            <div className="defaultBorder text-center p-4">
                <h1 className="titleText">Popular Blogs</h1>
                <div>
                    <PopularBlog/>
                    <PopularBlog/>
                    <PopularBlog/>
                </div>
            </div>
        </>
    )
}

export default PopularSection;