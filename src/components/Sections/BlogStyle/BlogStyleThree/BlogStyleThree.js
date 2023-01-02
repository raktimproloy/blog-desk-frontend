import React from "react"
import BlogStyleCss from "../style.module.css"

import ImageOne from "../../../../images/building.jpeg"

function BlogStyleThree() {
    return(
        <div className="defaultBorder d-flex justify-content-between align-items-center p-4">
            <img src={ImageOne} alt="Standard Image" className={BlogStyleCss.blogBigImageTwo}/>
            <div className={`ms-4 ${BlogStyleCss.blogRightSide}`}>
                <div className={`d-flex align-items-center py-2 ${BlogStyleCss.authorImage}`}>
                    <img src={ImageOne} alt="Author Image" />
                    <p>Raktim Proloy</p>
                    <p>23 August, 2022</p>
                </div>
                <h1>This is a post title</h1>
                <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,…</p>
            </div>
        </div>
    )
}

export default BlogStyleThree;