import React from "react";
import Navbar from "../../Sections/Navbar/Navbar"
import About from "../../Sections/About/About";
import PopularSection from "../../Sections/Popular/PopularSection";
import BlogStyleOne from "../../Sections/BlogStyle/BlogStyleOne/BlogStyleOne";
import BlogStyleTwo from "../../Sections/BlogStyle/BlogStyleTwo/BlogStyleTwo";
import BlogStyleThree from "../../Sections/BlogStyle/BlogStyleThree/BlogStyleThree";
import PageHeading from "../../Sections/PageHeading/PageHeading";

import HomeStyle from "./style.module.css"

import testImage from "../../../images/building.jpeg"

function Home() {
    return(
        <>
            <Navbar/>
            <PageHeading/>
            <div className="container py-5 d-flex justify-content-between">
                {/* Right Side */}
                <div className={`leftSectionContainer`}>
                    <div>
                        <h2 className="py-2">Standard Blog</h2>
                        <div className="defaultBorder d-flex justify-content-between p-2">
                            <div className={`p-3 ${HomeStyle.standardBlogRightPart}`}>
                                <BlogStyleTwo/>
                            </div>
                            <div className={`p-3 ${HomeStyle.standardBlogLeftPart}`}>
                                <BlogStyleOne/>
                                <BlogStyleOne/>
                                <BlogStyleOne/>
                                <BlogStyleOne/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Common Blog</h1>
                        <div className="defaultBorder d-flex justify-content-between p-2">
                            <div className={`p-3 ${HomeStyle.standardBlogRightPart}`}>
                                <BlogStyleTwo/>
                                <BlogStyleOne/>
                                <BlogStyleOne/>
                            </div>
                            <div className={`p-3 ${HomeStyle.standardBlogLeftPart}`}>
                                <BlogStyleTwo/>
                                <BlogStyleOne/>
                                <BlogStyleOne/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Common Blog</h1>
                        <div className="defaultBorder d-flex justify-content-between p-2">
                            <div className={`p-3 ${HomeStyle.standardBlogRightPart}`}>
                                <BlogStyleTwo/>
                                <BlogStyleOne/>
                                <BlogStyleOne/>
                            </div>
                            <div className={`p-3 ${HomeStyle.standardBlogLeftPart}`}>
                                <BlogStyleTwo/>
                                <BlogStyleOne/>
                                <BlogStyleOne/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Common Blog</h1>
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

export default Home;