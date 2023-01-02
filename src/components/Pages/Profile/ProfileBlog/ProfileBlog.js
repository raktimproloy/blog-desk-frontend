import React from "react"
import BlogStyleCss from "../style.module.css"

import ImageOne from "../../../../images/building.jpeg"

function ProfileBlog() {
    return(
        <div className="defaultBorder d-flex justify-content-between align-items-start p-4">
            <img src={ImageOne} alt="Standard Image" className={BlogStyleCss.blogBigImageTwo}/>
            <div className={`ms-4 ${BlogStyleCss.blogRightSide}`}>
                <h1>This is a post title</h1>
                <p className="mb-3">Category</p>
                <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,…</p>
            </div>
        </div>
    )
}

export default ProfileBlog;