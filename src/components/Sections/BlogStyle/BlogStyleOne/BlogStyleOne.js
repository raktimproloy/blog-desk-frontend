import React from "react"
import { Link } from "react-router-dom"
import BlogStyleCss from "../style.module.css"

import ImageOne from "../../../../images/building.jpeg"

function BlogStyleOne() {
    return(
        <div className={`d-flex mb-4 ${BlogStyleCss.BlogStyleOneContainer}`}>
            <img src={ImageOne} alt="Standard Image" />
            <div className={`ms-3 ${BlogStyleCss.BlogStyleOneText}`}>
                <Link to={"/blog"}>
                    <h5>Facts About Business That Will Help You Success</h5>
                </Link>
                <p>23 August, 2022</p>
            </div>
        </div>
    )
}

export default BlogStyleOne;