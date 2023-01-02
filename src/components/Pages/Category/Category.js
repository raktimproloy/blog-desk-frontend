import React from "react";
import Navbar from "../../Sections/Navbar/Navbar";
import PageHeading from "../../Sections/PageHeading/PageHeading";
import CategoryStyle from "./style.module.css"
import BlogStyleThree from "../../Sections/BlogStyle/BlogStyleThree/BlogStyleThree"
import About from "../../Sections/About/About"
import PopularSection from "../../Sections/Popular/PopularSection"

function Category() {
    return(
        <>
            <Navbar/>
            <PageHeading/>
            <div className="container py-5 d-flex justify-content-between">
                {/* Right Side */}
                <div className={`leftSectionContainer`}>
                    <div>
                        <div>
                        <BlogStyleThree/>
                        </div>
                    </div>
                </div>
                {/* Left Side */}
                <div className={`rightSectionContainer`}>
                    <About/>
                    <PopularSection/>
                </div>
            </div>
        </>
    )
}

export default Category;